/**
 * @swagger
* components:
*  schemas:
*    Profile:
*      type: object
*      properties:
*        name:
*          type: string
*        avatar:
*          type: string
*        description:
*          type: string
*        website:
*          type: string
*        industry:
*          type: string
*        phone:
*          type: string
*        city:
*          type: string
*        address:
*          type: string
*        socialMedia:
*          type: object
*          properties:
*            facebook:
*              type: string
*            twitter:
*              type: string
*            linkedin:
*              type: string
*    User:
*      type: object
*      required:
*        - firstName
*        - lastName
*        - email
*        - password
*        - roleId
*        - profile
*      properties:
*        firstName:
*          type: string
*        lastName:
*          type: string
*        email:
*          type: string
*        password:
*          type: string
*        roleId:
*          type: string  # Change to "type: object" if roleId refers to another schema
*        profile:
*          type: object
*          $ref: '#/components/schemas/Profile'
*/

const mongoose = require("mongoose");

// Profile Schema (for Business Profile Information)
const profileSchema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  description: { type: String },
  slogan: { type: String }, 
  employees: { type: String }, 
  website: { type: String },
  industry: { type: String },
  phone: { type: String },
  city: { type: String },
  address: { type: String },
  socialMedia: {
    type: Object,
    properties: {
      facebook: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
    },
  },
});

// User Schema (for User Information)
const userSchema = new mongoose.Schema({
  firstName: { // Tên (First Name)
    type: String,
    required: true,
  },
  lastName: { // Họ (Last Name)
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures unique email addresses
  },
  password: {
    type: String,
    required: true,
  },
  roleId: { // Vai trò (Role ID)
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  profile: { // Thông tin doanh nghiệp (Business Profile)
    type: profileSchema,
    required: true,
  },
});

mongoose.model("User", userSchema);