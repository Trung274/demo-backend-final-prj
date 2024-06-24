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
  name: { // Tên Doanh Nghiệp (Company Name)
    type: String,
  },
  avatar: { // Ảnh đại diện (Profile Picture)
    type: String,
  },
  description: { // Mô tả (Description)
    type: String,
  },
  website: { // Trang web (Website)
    type: String,
  },
  industry: { // Ngành nghề (Industry)
    type: String,
  },
  phone: { // Số điện thoại (Phone Number)
    type: String,
  },
  city: { // Thành phố (City)
    type: String,
  },
  address: { // Địa chỉ (Address)
    type: String,
  },
  socialMedia: { // Mạng xã hội (Social Media)
    type: Object,
    properties: {
      facebook: {
        type: String,
      },
      twitter: {
        type: String,
      },
      linkedin: {
        type: String,
      },
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