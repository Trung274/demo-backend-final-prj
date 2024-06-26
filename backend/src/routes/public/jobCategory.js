/**
 * @swagger
 * components:
 *   schemas:
 *     JobCategory:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the job category
 *         name:
 *           type: string
 *           description: The name of the job category
 *         iconUrl:
 *           type: string
 *           description: URL of the category icon
 *         description:
 *           type: string
 *           description: A brief description of the job category
 *       example:
 *         _id: 5f9d5a3b9d3e2a1b1c9d5a3c
 *         name: Information Technology
 *         iconUrl: https://example.com/it-icon.png
 *         description: Jobs related to computer systems, software, and networks
 * 
 * paths:
 *   /jobCategories:
 *     get:
 *       summary: Retrieve all job categories
 *       tags: [JobCategories]
 *       responses:
 *         200:
 *           description: A list of job categories
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/JobCategory'
 *         500:
 *           description: Server error
 */

const JobCategoryController = require("../../app/Controllers/JobCategoryController");

module.exports = app => {
  app.get("/jobCategories", JobCategoryController.getAllCategories);
};