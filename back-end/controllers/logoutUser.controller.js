import User from "../schemas/user.schema.js";
import asyncHandler from "express-async-handler";

export const logoutUser = asyncHandler(async (req, res) => {
	res.cookie("token", "", {
		httpOnly: true,
		expires: new Date(0),
	});
	res.status(200).send("User logged out");
});
