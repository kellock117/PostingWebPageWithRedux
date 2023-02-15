import express from "express";
import UserController from "../controller/user.controller.js";

const router = express.Router();

// create user
router.post("/createUser", UserController.createUser);
// login
router.post("/login", UserController.login);

export default router;
