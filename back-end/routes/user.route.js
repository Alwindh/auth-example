import asyncHandler from "express-async-handler";
import express from "express";
import { registerUser } from "../controllers/registerUser.controller.js";
import { authUser } from "../controllers/authUser.controller.js";
import { logoutUser } from "../controllers/logoutUser.controller.js";

const router = express.Router();

// register user
router.post("/register", registerUser);

// login user
router.post("/login", authUser);

// logout user
router.post("/logout", logoutUser);

// get user profile
const getUserProfile = asyncHandler(async (req, res) => {
	res.send("Get user profile");
});
router.get("/profile", getUserProfile);

export default router;
