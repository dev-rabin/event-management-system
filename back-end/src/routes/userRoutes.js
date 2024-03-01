const express = require ("express");
const UserController = require("../controllers/userController");
const verifyToken = require("../middleware/verifyToken");
const userRouter = express.Router();

userRouter.post("/createAccount", UserController.createUser);
userRouter.post("/login" , UserController.loginUser);
userRouter.get("/user",verifyToken, UserController.getUserByToken);
userRouter.post("/contact", UserController.contactUs);

module.exports = userRouter;