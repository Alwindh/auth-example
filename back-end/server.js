import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import userRouter from "./routes/user.route.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const port = process.env.PORT || 4444;

app.use("/api/user", userRouter);
// Connect to MongoDB using Mongoose
mongoose
	.connect(process.env.DB)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	});
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
