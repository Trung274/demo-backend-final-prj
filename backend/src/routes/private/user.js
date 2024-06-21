/**
 * @swagger
 * components:
 *   securitySchemes:
 *     authorization:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *           description: Email for the user, needs to be unique.
 *         password:
 *           type: string
 *         photo:
 *           type: string
 *           description: Image URL string
 *         nickname:
 *           type: string
 *       example:
 *         username: Renan
 *         email: fake@email.com
 *         password: 123456aa
 *         nickname: Dexter
 *         photo: https://photourl.com/image.png
 *
 * paths:
 *   /users/update/{id}:
 *     put:
 *       summary: Update an user
 *       description: Updates the details of an existing user.
 *       security:
 *         - authorization: []
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
 *
 *   /users/delete/{id}:
 *     delete:
 *       summary: Delete an user
 *       description: Deletes an existing user by their ID.
 *       security:
 *         - authorization: []
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: Unique ID of the user to delete.
 *       responses:
 *         200:
 *           description: User deleted successfully.
 *         401:
 *           description: Unauthorized if the user is not authenticated.
 *         404:
 *           description: User not found.
 *
 * security:
 *   - authorization: []
 */
const UserController = require("../../app/Controllers/UserController");

module.exports = (app) => {
  app.put("/users/update/:id", UserController.updateUser);

  app.delete("/users/delete/:id", UserController.deleteUserById);
};
