const mongoose = require("mongoose");
const model = mongoose.model("Job");

class JobController {
  async getAllJobs(request, response) {
    try {
      const jobs = await model.find({});
      return response.status(200).json(jobs);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async createJob(request, response) {
    try {
      const job = await model.create(request.body);
      return response.json(job);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async updateJob(request, response) {
    const { params, body } = request;
    try {
      const job = await model.findByIdAndUpdate(params.id, body, { new: true });
      return response.status(200).json(job);
    } catch (error) {
      return response.status(404).json(error);
    }
  }

  async searchJobById(request, response) {
    try {
      const job = await model.findById(request.params.id);
      return response.status(200).json(job);
    } catch (error) {
      return response.status(404).json(error);
    }
  }

  async deleteJobById(request, response) {
    try {
      await model.deleteOne({ _id: request.params.id });
      return response.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
      return response.status(404).json(error);
    }
  }

  async getUserJobs(request, response) {
    try {
      const { userId } = request.params;
      const jobs = await model.find({ userId: userId });
      return response.status(200).json(jobs);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async createJob(request, response) {
  try {
    const jobData = { ...request.body, userId: request.user._id }; 
    const job = await model.create(jobData);
    return response.status(201).json(job);
  } catch (error) {
    return response.status(500).json(error);
  }
}

  async updateUserJob(request, response) {
    try {
      const { userId, jobId } = request.params;
      const job = await model.findOneAndUpdate(
        { _id: jobId, userId },
        request.body,
        { new: true }
      );
      if (!job) {
        return response.status(404).json({ message: "Job not found or unauthorized" });
      }
      return response.status(200).json(job);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  async deleteUserJob(request, response) {
    try {
      const { userId, jobId } = request.params;
      const result = await model.deleteOne({ _id: jobId, userId });
      if (result.deletedCount === 0) {
        return response.status(404).json({ message: "Job not found or unauthorized" });
      }
      return response.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

module.exports = new JobController();