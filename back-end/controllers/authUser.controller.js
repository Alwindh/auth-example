import User from "../schemas/user.schema.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const foundUser = await User.findOne({ email });

	if (foundUser && (await foundUser.matchPassword(password))) {
		generateToken(res, foundUser._id);
		res.status(201);
		res.send("User logged in");
	} else {
		res.status(401);
		throw new Error("Invalid email or password");
	}
});
