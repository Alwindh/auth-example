import React, { useEffect, useState } from "react";
import { Container, Paper, Button, TextField, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
	const navigate = useNavigate();
	const [userForm, setUserForm] = useState({ username: "", password: "", passwordConfirm: "" });

	function handleFormChange(event) {
		setUserForm({ ...userForm, [event.target.name]: event.target.value });
	}
	function navigateToLogin() {
		navigate("/login");
	}

	return (
		<Container>
			<Paper sx={{ p: 2, m: 2 }}>
				<Stack
					direction="column"
					spacing={2}>
					<Typography variant="h4">Register</Typography>
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
					<TextField
						name="passwordConfirm"
						type="password"
						onChange={handleFormChange}
						label="Confirm Password"
					/>
					<Typography
						variant="subtitle2"
						color="gray">
						Already have an account?{" "}
						<div
							onClick={navigateToLogin}
							style={{ color: "blue" }}>
							Login here.
						</div>
					</Typography>
					<Button>Register</Button>
				</Stack>
			</Paper>
		</Container>
	);
}
