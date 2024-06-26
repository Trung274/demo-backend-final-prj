/**
 * @swagger
 *  components:
 *    schemas:
 *      JobCategory:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            type: string
 *            description: The name of the job category
 *          iconUrl:
 *            type: string
 *            description: URL of the category icon
 *          description:
 *            type: string
 *            description: A brief description of the job category
 *        example:
 *           name: Information Technology
 *           iconUrl: https://example.com/it-icon.png
 *           description: Jobs related to computer systems, software, and networks
 *      JobCategoryResponse:
 *        allOf:
 *          - $ref: '#/components/schemas/JobCategory'
 *          - type: object
 *            properties:
 *              _id:
 *                type: string
 *                description: The auto-generated id of the job category
 *            example:
 *              _id: 5f9d5a3b9d3e2a1b1c9d5a3c
 */
const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  iconUrl: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

mongoose.model("JobCategory", schema);