/**
 * @swagger
 * components:
 *   schemas:
 *     JobCategory:
 *       type: object
 *       required:
 *         - name
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
 *       security:
 *         - authorization: []
 *       responses:
 *         200:
 *           description: A list of job categories
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/JobCategory'
 *         401:
 *           description: Unauthorized
 *     post:
 *       summary: Create a new job category
 *       tags: [JobCategories]
 *       security:
 *         - authorization: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JobCategory'
 *       responses:
 *         201:
 *           description: Created job category
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/JobCategory'
 *         401:
 *           description: Unauthorized
 * 
 *   /jobCategories/{id}:
 *     get:
 *       summary: Get a job category by ID
 *       tags: [JobCategories]
 *       security:
 *         - authorization: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The job category ID
 *       responses:
 *         200:
 *           description: A job category object
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/JobCategory'
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Job category not found
 *     put:
 *       summary: Update a job category
 *       tags: [JobCategories]
 *       security:
 *         - authorization: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The job category ID
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JobCategory'
 *       responses:
 *         200:
 *           description: Updated job category
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/JobCategory'
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Job category not found
 *     delete:
 *       summary: Delete a job category
 *       tags: [JobCategories]
 *       security:
 *         - authorization: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *           description: The job category ID
 *       responses:
 *         200:
 *           description: Job category deleted successfully
 *         401:
 *           description: Unauthorized
 *         404:
 *           description: Job category not found
 */

const JobCategoryController = require("../../app/Controllers/JobCategoryController");

module.exports = app => {
  app.get("/jobCategories", JobCategoryController.getAllCategories);
  app.post("/jobCategories", JobCategoryController.createCategory);
  app.get("/jobCategories/:id", JobCategoryController.getCategoryById);
  app.put("/jobCategories/:id", JobCategoryController.updateCategory);
  app.delete("/jobCategories/:id", JobCategoryController.deleteCategory);
};