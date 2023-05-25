const userRouter = require("express").Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middleware/auth");

userRouter.post("/register", userController.register);
userRouter.post("/login", verifyToken, userController.login);

module.exports = userRouter;
