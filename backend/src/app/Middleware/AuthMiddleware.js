/**
 * @swagger
 * paths:
 *   /login:
 *     post:
 *       summary: User login
 *       tags: [Register and Login]
 *       description: Authenticates an user and returns a token along with user details.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *                 - password
 *               properties:
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: User's email address.
 *                 password:
 *                   type: string
 *                   description: User's password.
 *       responses:
 *         200:
 *           description: Login successful, returns user details and token.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     description: The user ID.
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: The user's email address.
 *                   roleId:
 *                     type: string
 *                     description: RoleId
 *                   token:
 *                     type: string
 *                     description: Bearer token for authenticating future requests.
 *         401:
 *           description: Unauthorized, invalid email or password.
 */
const AuthController = require("../../app/Controllers/AuthController");
module.exports = (app) => {
  app.post("/login", AuthController.login);
  // Private Routes
  app.use("/*", AuthController.verifyToken);
};
