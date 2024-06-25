const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const model = mongoose.model("User");

const MailerService = require("../Services/Mail");
const { request, response } = require("../../config/express");

class UserController {
  hashPassword = (password) => {
    const saltRounds = bcrypt.genSaltSync(Number(process.env.AUTH_ROUNDS));
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    return hashedPassword;
  };

  sendWelcomeEmail = (email) => {
    const content = MailerService.welcomeMailContent(email);
    MailerService.sendMail(content);
  };

  getAllUsers = async (request, response) => {
    try {
      const users = await model.find({});
      return response.status(200).json(users);
    } catch (error) {
      return response.status(500).json(error);
    }
  };

  createUser = async (request, response) => {
    const user = request.body;
    try {
      user.password = this.hashPassword(user.password);

      const newUser = await model.create(user);
      this.sendWelcomeEmail(user.email);

      return response.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      return response.status(500).json(error);
    }
  };

  updateUserById = async (request, response) => {
    console.log(request.params)
    const { id } = request.params;
    const updateData = request.body;

    try {
      if (updateData.password) {
        updateData.password = this.hashPassword(updateData.password);
      }

      const updatedUser = await model.findByIdAndUpdate(id, updateData, { new: true });

      if (!updatedUser) {
        return response.status(404).json({ message: "User not found" });
      }

      return response.status(200).json(updatedUser);
    } catch (error) {
      return response.status(500).json(error);
    }
  };

  updateProfile = async (request, response) => {
    const updateData = request.body;
    const userId = request.user.user_id; 
  
    try {
      // Only allow updating of specific fields
      const allowedUpdates = ['firstName', 'lastName', 'email', 'password', 'profile'];
      const updates = Object.keys(updateData)
        .filter(key => allowedUpdates.includes(key))
        .reduce((obj, key) => {
          obj[key] = updateData[key];
          return obj;
        }, {});
  
      if (updates.password) {
        updates.password = this.hashPassword(updates.password);
      }
  
      const updatedUser = await model.findByIdAndUpdate(userId, updates, { new: true });
  
      if (!updatedUser) {
        return response.status(404).json({ message: "User not found" });
      }
  
      // Remove sensitive information before sending the response
      const userResponse = updatedUser.toObject();
      delete userResponse.password;
  
      return response.status(200).json(userResponse);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  };

  searchUserById = async (request, response) => {
    const { id } = request.params;
    try {
      const user = await model.findById(id);

      if (!user) {
        return response.status(404).json({ message: "User not found" });
      }

      const userResponse = { ...user.toObject() };
      delete userResponse.password;

      return response.status(200).json(userResponse);
    } catch (error) {
      return response.status(404).json(error);
    }
  };

  deleteUserById = async (request, response) => {
    const { id } = request.params;
    try {
      const result = await model.deleteOne({ _id: id });
      if (result.deletedCount === 0) {
        return response.status(404).json({ message: "User not found" });
      }
      return response.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      return response.status(500).json(error);
    }
  };

  getCurrentUser = async (request, response) => {
    try {
      const userId = request.user.user_id;
      const user = await model.findById(userId);

      if (!user) {
        return response.status(404).json({ message: "User not found" });
      }

      // Remove sensitive information before sending the response
      const userResponse = user.toObject();
      delete userResponse.password;

      return response.status(200).json(userResponse);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  };

  changePassword = async (request, response) => {
    try {
      const userId = request.user.user_id;
      const { currentPassword, newPassword, retypeNewPassword } = request.body;
  
      // Check if new password and retyped password match
      if (newPassword !== retypeNewPassword) {
        return response.status(400).json({ message: "New passwords do not match" });
      }
  
      const user = await model.findById(userId);
      if (!user) {
        return response.status(404).json({ message: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return response.status(400).json({ message: "Current password is incorrect" });
      }
  
      user.password = this.hashPassword(newPassword);
      await user.save();
  
      return response.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  };
  
  deleteAccount = async (request, response) => {
    try {
      const userId = request.user.user_id;
      const result = await model.deleteOne({ _id: userId });
  
      if (result.deletedCount === 0) {
        return response.status(404).json({ message: "User not found" });
      }
  
      return response.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  };

deleteUserById = async (request, response) => {
  const { id } = request.params;
  try {
    const result = await model.findByIdAndDelete(id);
    if (!result) {
      return response.status(404).json({ message: "User not found" });
    }
    return response.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    return response.status(500).json(error);
  }
};
}

module.exports = new UserController();