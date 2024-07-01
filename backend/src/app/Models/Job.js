/**
 * @swagger
 *  components:
 *    schemas:
 *      Job:
 *        type: object
 *        properties:
 *          jobTitle:
 *            type: string
 *            description: Title of the job
 *          description:
 *            type: string
 *            description: Detailed description of the job
 *          userId:
 *            type: string
 *            description: ID of the user who posted the job
 *          location:
 *            type: string
 *            description: Location of the job
 *          businessLogoUrl:
 *            type: string
 *            description: URL of the business logo
 *          salary:
 *            type: string
 *            description: Salary information for the job
 *          employmentType:
 *            type: array
 *            items:
 *              type: string
 *              enum: [fulltime, parttime, internship, remote, contract]
 *            description: Type(s) of employment for the job
 *          categoryId:
 *            type: string
 *            description: ID of the job category
 *          createdAt:
 *            type: string
 *            format: date-time
 *            description: Date and time when the job was created
 *          updatedAt:
 *            type: string
 *            format: date-time
 *            description: Date and time when the job was last updated
 *          expiredAt:
 *            type: string
 *            format: date-time
 *            description: Date and time when the job posting expires
 *        example:
 *           jobTitle: Senior Software Engineer
 *           description: We are looking for an experienced software engineer...
 *           userId: 5f9d5a3b9d3e2a1b1c9d5a3b
 *           location: San Francisco, CA
 *           businessLogoUrl: https://example.com/logo.png
 *           salary: $120,000 - $150,000 per year
 *           employmentType: [fulltime, remote]
 *           categoryId: 5f9d5a3b9d3e2a1b1c9d5a3c
 *           createdAt: 2023-06-01T00:00:00.000Z
 *           updatedAt: 2023-06-01T00:00:00.000Z
 *           expiredAt: 2023-07-01T00:00:00.000Z
 */
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  businessLogoUrl: {
    type: String,
    required: false,
  },
  salary: {
    type: String,
    required: true,
  },
  employmentType: {
    type: [String],
    enum: ['fulltime', 'parttime', 'internship', 'remote', 'contract'],
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'JobCategory',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  expiredAt: {
    type: Date,
    required: true,
  },
});

mongoose.model("Job", schema);