/**
 * @swagger
 * components:
 *   securitySchemes:
 *     authorization:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Job:
 *       type: object
 *       properties:
 *         jobTitle:
 *           type: string
 *           description: Title of the job
 *         description:
 *           type: string
 *           description: Detailed description of the job
 *         userId:
 *           type: string
 *           description: ID of the user who posted the job
 *         location:
 *           type: string
 *           description: Location of the job
 *         businessLogoUrl:
 *           type: string
 *           description: URL of the business logo
 *         salary:
 *           type: string
 *           description: Salary information for the job
 *         employmentType:
 *           type: string
 *           enum: [fulltime, parttime, internship, remote, contract]
 *           description: Type of employment for the job
 *         expiredAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the job posting expires
 *       example:
 *         jobTitle: Senior Software Engineer
 *         description: We are looking for an experienced software engineer...
 *         userId: 5f9d5a3b9d3e2a1b1c9d5a3b
 *         location: San Francisco, CA
 *         businessLogoUrl: https://example.com/logo.png
 *         salary: $120,000 - $150,000 per year
 *         employmentType: fulltime
 *         expiredAt: 2023-07-01T00:00:00.000Z
 *
 * paths:
 *   /jobs/create:
 *     post:
 *       summary: Create a job posting
 *       tags: [Jobs]
 *       description: Creates a new job posting entry.
 *       security:
 *         - authorization: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       responses:
 *         201:
 *           description: Job posting created successfully.
 *         401:
 *           description: Unauthorized if the user is not authenticated.
 *
 *   /jobs/update/{id}:
 *     put:
 *       summary: Update a job posting
 *       tags: [Jobs]
 *       description: Updates an existing job posting by its ID.
 *       security:
 *         - authorization: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Unique ID of the job posting to update.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Job'
 *       responses:
 *         200:
 *           description: Job posting updated successfully.
 *         400:
 *           description: Bad request if the input data is invalid.
 *         401:
 *           description: Unauthorized if the user is not authenticated.
 *         404:
 *           description: Job not found or user not authorized to update.
 *
 *   /jobs/delete/{id}:
 *     delete:
 *       summary: Delete a job posting
 *       tags: [Jobs]
 *       description: Deletes an existing job posting by its ID.
 *       security:
 *         - authorization: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Unique ID of the job posting to delete.
 *       responses:
 *         200:
 *           description: Job posting deleted successfully.
 *         401:
 *           description: Unauthorized if the user is not authenticated.
 *         404:
 *           description: Job not found or user not authorized to delete.
 *
 *   /jobs/user/{userId}:
 *     get:
 *       summary: Get all jobs posted by a specific user
 *       tags: [Jobs]
 *       security:
 *         - authorization: []
 *       parameters:
 *         - in: path
 *           name: userId
 *           required: true
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: List of jobs posted by the user
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Job'
 *         401:
 *           description: Unauthorized if the user is not authenticated.
 *
 * security:
 *   - authorization: []
 */
const JobController = require("../../app/Controllers/JobController");

module.exports = (app) => {
  app.post("/jobs/create", JobController.createJob);
  app.put("/jobs/update/:id", JobController.updateJob);
  app.delete("/jobs/delete/:id", JobController.deleteJobById);
  app.get("/jobs/user/:userId", JobController.getUserJobs);
};