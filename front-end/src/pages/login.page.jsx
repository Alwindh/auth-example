import React, { useEffect, useState } from "react";
import { Container, Paper, Button, TextField, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
	const navigate = useNavigate();
	const [userForm, setUserForm] = useState({ username: "", password: "" });

	function handleFormChange(event) {
		setUserForm({ ...userForm, [event.target.name]: event.target.value });
	}
	function navigateToRegister() {
		navigate("/register");
	}

	return (
		<Container>
			<Paper sx={{ p: 2, m: 2 }}>
				<Stack
					direction="column"
					spacing={2}>
					<Typography variant="h4">Login</Typography>
					<TextField
						name="username"
						onChange={handleFormChange}
						label="Username"
					/>
					<TextField
						name="password"
						type="password"
						onChange={handleFormChange}
						label="Password"
					/>
					<Typography
						variant="subtitle2"
						color="gray">
						Don't have an account?{" "}
						<div
							onClick={navigateToRegister}
							style={{ color: "blue" }}>
							Register here.
						</div>
					</Typography>
					<Button>Login</Button>
				</Stack>
			</Paper>
		</Container>
	);
}
