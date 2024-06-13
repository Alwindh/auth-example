import User from "../schemas/user.schema.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

export const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	const userExists = await User.findOne({ email });
	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}

	const user = await User.create({
		name,
		email,
		password,
	});
	if (!user) {
		res.status(400);
		throw new Error("Invalid user data");
	}
	if (user) {
		generateToken(res, user._id);
		res.status(201);
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
		});
	}
});
