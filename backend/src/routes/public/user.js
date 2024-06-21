/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *         - roleId
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the user
 *         username:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *           description: Email for the user, needs to be unique.
 *         password:
 *           type: string
 *         roleId:
 *           type: string
 *           description: ObjectId of the user's role
 *         profile:
 *           type: object
 *           properties:
 *             phone:
 *               type: string
 *             city:
 *               type: string
 *             avatar:
 *               type: string
 *             description:
 *               type: string
 *             userTitle:
 *               type: array
 *               items:
 *                 type: string
 *             profileLink:
 *               type: array
 *               items:
 *                 type: string
 *             address:
 *               type: string
 *             businessLink:
 *               type: string
 *       example:
 *         username: JohnDoe
 *         email: john@example.com
 *         password: securePassword123
 *         roleId: 60d5ecb8b4d7c62a90132b5f
 *         profile: {}
 * 
 * paths:
 *   /users/create:
 *     post:
 *       summary: Create a new user
 *       description: Creates a new user with username, email, password, and roleId. The profile is initialized as an empty object.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - username
 *                 - email
 *                 - password
 *                 - roleId
 *               properties:
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 password:
 *                   type: string
 *                 roleId:
 *                   type: string
 *       responses:
 *         201:
 *           description: User created successfully.
 *         400:
 *           description: Bad request.
 *         500:
 *           description: Server error.
 *
 *   /users:
 *     get:
 *       summary: Get all users
 *       tags: [Users]
 *       description: Retrieves a list of all users.
 *       responses:
 *         200:
 *           description: A list of users.
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *
 *   /users/select/{id}:
 *     get:
 *       summary: Search for a user by ID
 *       tags: [Users]
 *       description: Returns a single user matching the provided ID.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Unique ID of the user to retrieve.
 *           schema:
 *             type: string
 *       responses:
 *         200:
 *           description: A user object.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         404:
 *           description: User not found.
 */

const UserController = require("../../app/Controllers/UserController");

module.exports = (app) => {
  app.post("/users/create", UserController.createUser);
  app.get("/users", UserController.getAllUsers);
  app.get("/users/select/:id", UserController.searchUserById);
};