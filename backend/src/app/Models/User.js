/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - username
 *          - email
 *          - password
 *        properties:
 *          username:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 *          photo:
 *            type: string
 *            description: Image URL string
 *          nickname:
 *            type: string
 *        example:
 *           username: Renan
 *           email: fake@email.com
 *           password: 123456aa
 *           nickname: Dexter
 *           photo: https://photourl.com/image.png
 */

const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  phone: String,
  city: String,
  avatar: String,
  description: String,
  userTitle: [String],
  profileLink: [String],
  address: String,
  businessLink: String
}, { _id: false });

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  profile: {
    type: profileSchema,
    default: {}
  }
});

mongoose.model("User", schema);