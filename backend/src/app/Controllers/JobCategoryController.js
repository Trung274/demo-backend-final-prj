const mongoose = require("mongoose");
const JobCategoryModel = mongoose.model("JobCategory");

class JobCategoryController {
  async getAllCategories(request, response) {
    try {
      const categories = await JobCategoryModel.find({});
      return response.status(200).json(categories);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async createCategory(request, response) {
    try {
      const category = await JobCategoryModel.create(request.body);
      return response.status(201).json(category);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async getCategoryById(request, response) {
    try {
      const category = await JobCategoryModel.findById(request.params.id);
      if (!category) {
        return response.status(404).json({ message: "Category not found" });
      }
      return response.status(200).json(category);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async updateCategory(request, response) {
    try {
      const category = await JobCategoryModel.findByIdAndUpdate(
        request.params.id,
        request.body,
        { new: true }
      );
      if (!category) {
        return response.status(404).json({ message: "Category not found" });
      }
      return response.status(200).json(category);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async deleteCategory(request, response) {
    try {
      const result = await JobCategoryModel.deleteOne({ _id: request.params.id });
      if (result.deletedCount === 0) {
        return response.status(404).json({ message: "Category not found" });
      }
      return response.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

module.exports = new JobCategoryController();