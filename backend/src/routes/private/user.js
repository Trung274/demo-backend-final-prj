/**
 * @swagger
  * components:
 *   securitySchemes:
 *     authorization:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * paths:
 *   /users/add:
 *     post:
 *       summary: Create a new user
 *       tags: [User]
 *       security:
 *       - authorization: []
 *       description: Creates a new user with username, email, password, and roleId. The profile is initialized as an empty object.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
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
 *       tags: [User]
 *       security:
 *       - authorization: []
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
 *       tags: [User]
 *       security:
 *       - authorization: []
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
 * 
 *   /users/update/{id}:
 *     put:
 *       summary: Update a user
 *       tags: [User]
 *       security:
 *       - authorization: []
 *       description: Updates the details of an existing user.
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Unique ID of the user to update.
 *           schema:
 *             type: string
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         200:
 *           description: User updated successfully.
 *         400:
 *           description: Bad request if the input data is invalid.
 *         401:
 *           description: Unauthorized if the user is not authenticated.
 *         404:
 *           description: User not found.
 */

const UserController = require("../../app/Controllers/UserController");

module.exports = (app) => {
  app.post("/users/create", UserController.createUser);
  app.get("/users", UserController.getAllUsers);
  app.get("/users/select/:id", UserController.searchUserById);
  app.put("/users/update/:id", UserController.updateUserById);
  app.put("/users/updateProfile", UserController.updateProfile);
};