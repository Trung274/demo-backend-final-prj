/**
 * @swagger
 * paths:
 *   /users/create:
 *     post:
 *       summary: Create a new user
 *       description: Creates a new user with the given details.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       responses:
 *         200:
 *           description: User created successfully.
 *         400:
 *           description: Bad request.
 *
 *   /users:
 *     get:
 *       summary: Get all users
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
 * components:
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
 */
const UserController = require("../../app/Controllers/UserController");

module.exports = (app) => {
  app.post("/users/create", UserController.createUser);
  app.get("/users", (req, res) => { UserController.getAllUsers(req,res)});
  app.get("/users/select/:id", (req, res) => { UserController.searchUserById(req,res)});
};
