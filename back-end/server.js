const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4444;

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

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
