/**
 * @swagger
 * paths:
 *   /users/create:
 *     post:
 *       summary: Create a new user
 *       tags: [Register and Login]
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
 */

const UserController = require("../../app/Controllers/UserController");

module.exports = (app) => {
  app.post("/users/create", UserController.createUser);
  app.get("/users/select/:id", UserController.searchUserById);
  app.get("/users/:type", UserController.getUserByType);
};