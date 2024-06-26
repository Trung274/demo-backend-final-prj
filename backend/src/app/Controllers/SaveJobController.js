const mongoose = require("mongoose");
const SaveJobModel = mongoose.model("SaveJob");
const JobModel = mongoose.model("Job");

class SaveJobController {
  async saveJob(request, response) {
    try {
      const { userId, jobId } = request.body;
      const savedJob = await SaveJobModel.create({ userId, jobId });
      return response.status(201).json(savedJob);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

   async unsaveJob(request, response) {
    try {
      const userId = request.user.user_id; // Get user ID from authenticated request
      const { jobId } = request.params; // Get jobId from URL params
      const result = await SaveJobModel.deleteOne({ userId, jobId });
      
      if (result.deletedCount === 0) {
        return response.status(404).json({ message: "Saved job not found" });
      }
      
      return response.status(200).json({ message: "Job unsaved successfully" });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  }


  async getSavedJobs(request, response) {
    try {
      const { userId } = request.params;
      const savedJobs = await SaveJobModel.find({ userId }).populate('jobId');
      const jobDetails = savedJobs.map(saved => saved.jobId);
      return response.status(200).json(jobDetails);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

module.exports = new SaveJobController();