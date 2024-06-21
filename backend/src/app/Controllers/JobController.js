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
}

module.exports = new JobController();