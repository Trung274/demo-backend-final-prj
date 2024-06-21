/**
 * @swagger
 *  components:
 *    schemas:
 *      SaveJob:
 *        type: object
 *        required:
 *          - userId
 *          - jobId
 *        properties:
 *          _id:
 *            type: string
 *            description: The auto-generated id of the saved job
 *          userId:
 *            type: string
 *            description: The id of the user who saved the job
 *          jobId:
 *            type: string
 *            description: The id of the saved job
 *          createdAt:
 *            type: string
 *            format: date
 *            description: The date the job was saved
 *        example:
 *           _id: d5fE_asz
 *           userId: 60d725084265cf5557d4f1df
 *           jobId: 60d725084265cf5557d4f1e0
 *           createdAt: 2023-01-01T00:00:00.000Z
 */

const mongoose = require("mongoose");

const schema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("SaveJob", schema);