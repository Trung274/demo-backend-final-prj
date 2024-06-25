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
 *       summary: Search for an user by ID
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
 *           description: An user object.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         404:
 *           description: User not found.
 * 
 *   /users/update/{id}:
 *     put:
 *       summary: Update an user
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
 * 
  * /users/updateProfile:
 *   put:
 *     summary: Update user's own profile
 *     tags: [User]
 *     security:
 *       - authorization: []
 *     description: Allows an user to update their own profile information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *               profile:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   avatar:
 *                     type: string
 *                   description:
 *                     type: string
 *                   website:
 *                     type: string
 *                   industry:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   city:
 *                     type: string
 *                   address:
 *                     type: string
 *                   socialMedia:
 *                     type: object
 *                     properties:
 *                       facebook:
 *                         type: string
 *                       twitter:
 *                         type: string
 *                       linkedin:
 *                         type: string
 *     responses:
 *       200:
 *         description: Profile updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request if the input data is invalid.
 *       401:
 *         description: Unauthorized if the user is not authenticated.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 * /users/me:
 *   get:
 *     summary: Get current user's profile
 *     tags: [User]
 *     security:
 *       - authorization: []
 *     description: Retrieves the profile of the currently authenticated user.
 *     responses:
 *       200:
 *         description: Current user's profile retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized - User is not authenticated.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 * 
 /users/changePassword:
 *   put:
 *     summary: Change user's password
 *     tags: [User]
 *     security:
 *       - authorization: []
 *     description: Allows an user to change their password with password confirmation.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - currentPassword
 *               - newPassword
 *               - retypeNewPassword
 *             properties:
 *               currentPassword:
 *                 type: string
 *               newPassword:
 *                 type: string
 *               retypeNewPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: Password changed successfully.
 *       400:
 *         description: Bad request - Invalid current password or new passwords do not match.
 *       401:
 *         description: Unauthorized - User is not authenticated.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 * 
 * /users/deleteAccount:
 *   delete:
 *     summary: Delete user's own account
 *     tags: [User]
 *     security:
 *       - authorization: []
 *     description: Allows an user to delete their own account.
 *     responses:
 *       200:
 *         description: Account deleted successfully.
 *       401:
 *         description: Unauthorized - User is not authenticated.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 * 
 * /users/delete/{id}:
 *   delete:
 *     summary: Delete an user
 *     tags: [User]
 *     security:
 *       - authorization: []
 *     description: Deletes an existing user by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the user to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       401:
 *         description: Unauthorized if the user is not authenticated.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 */

const UserController = require("../../app/Controllers/UserController");

module.exports = (app) => {
  app.post("/users/create", UserController.createUser);
  app.get("/users", UserController.getAllUsers);
  app.get("/users/select/:id", UserController.searchUserById);
  app.put("/users/update/:id", UserController.updateUserById);
  app.put("/users/updateProfile", UserController.updateProfile);
  app.get("/users/me", UserController.getCurrentUser);
  app.put("/users/changePassword", UserController.changePassword);
  app.delete("/users/deleteAccount", UserController.deleteAccount);
  app.delete("/users/delete/:id", UserController.deleteUserById);
};