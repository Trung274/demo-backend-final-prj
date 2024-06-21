/**
 * @swagger
 * /savejobs/save:
 *   post:
 *     summary: Save a job for a user
 *     tags: [SaveJobs]
 *     security:
 *       - authorization: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - jobId
 *             properties:
 *               userId:
 *                 type: string
 *               jobId:
 *                 type: string
 *     responses:
 *       201:
 *         description: The job was successfully saved
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SaveJob'
 *       500:
 *         description: Some server error
 * 
 * /savejobs/unsave/{userId}/{jobId}:
 *   delete:
 *     summary: Unsave a job for a user
 *     tags: [SaveJobs]
 *     security:
 *       - authorization: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *       - in: path
 *         name: jobId
 *         schema:
 *           type: string
 *         required: true
 *         description: The job id
 *     responses:
 *       200:
 *         description: The job was successfully unsaved
 *       500:
 *         description: Some server error
 * 
 * /savejobs/saved/{userId}:
 *   get:
 *     summary: Get all saved jobs for a user
 *     tags: [SaveJobs]
 *     security:
 *       - authorization: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *     responses:
 *       200:
 *         description: The list of saved jobs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Job'
 *       500:
 *         description: Some server error
 */

const SaveJobController = require("../../app/Controllers/SaveJobController");

module.exports = app => {
  app.post("/savejobs/save", SaveJobController.saveJob);
  app.delete("/savejobs/unsave/:userId/:jobId", SaveJobController.unsaveJob);
  app.get("/savejobs/saved/:userId", SaveJobController.getSavedJobs);
};