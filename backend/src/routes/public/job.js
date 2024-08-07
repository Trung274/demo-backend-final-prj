/**
 * @swagger
 * paths:
 *   /jobs:
 *     get:
 *       summary: Retrieves a list of job postings
 *       tags: [Jobs]
 *       description: Fetches a list of all job postings from the database.
 *       responses:
 *         200:
 *           description: A list of job postings.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Job'
 *   /jobs/select/{id}:
 *     get:
 *       summary: Searches for a job posting by ID
 *       tags: [Jobs]
 *       description: Returns a single job posting matching the provided ID.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Unique ID of the job posting to retrieve.
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: A job posting object.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Job'
 *         404:
 *           description: Job posting not found.
 *   /jobs/search:
 *     get:
 *       summary: Search for jobs
 *       tags: [Jobs]
 *       description: Searches for jobs based on various criteria.
 *       parameters:
 *         - in: query
 *           name: query
 *           schema:
 *             type: string
 *           description: Search query for job title or description
 *         - in: query
 *           name: location
 *           schema:
 *             type: string
 *           description: Job location
 *         - in: query
 *           name: categoryId
 *           schema:
 *             type: string
 *           description: Job category ID
 *       responses:
 *         200:
 *           description: List of jobs matching the search criteria
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Job'
 *         500:
 *           description: Server error
 * components:
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
 *           type: array
 *           items:
 *             type: string
 *             enum: [Fulltime, Parttime, Internship, Remote, Contract]
 *           description: Type(s) of employment for the job
 *         categoryId:
 *           type: string
 *           description: ID of the job category
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the job was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Date and time when the job was last updated
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
 *         employmentType: [Fulltime, Remote]
 *         categoryId: 5f9d5a3b9d3e2a1b1c9d5a3c
 *         createdAt: 2023-06-01T00:00:00.000Z
 *         updatedAt: 2023-06-01T00:00:00.000Z
 *         expiredAt: 2023-07-01T00:00:00.000Z
 */
const JobController = require("../../app/Controllers/JobController");

module.exports = app => {
  app.get("/jobs", JobController.getAllJobs);
  app.get("/jobs/select/:id", JobController.searchJobById);
  app.get('/jobs/search', JobController.searchJobs);
};