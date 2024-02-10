const express = require ("express");
const UserController = require("../controllers/userController");
const userRouter = express.Router();

userRouter.post("/createAccount", UserController.createUser);

module.exports = userRouter;