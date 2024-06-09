import { Button, Paper, Stack, TextField } from "@mui/material";
import { sha256 } from "js-sha256";
import { loginFunction } from "../functions/checkLogin";
import { getData } from "../functions/getData";
import { useState } from "react";

export function LoginComponent({ setLoggedIn }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loginResult, setLoginResult] = useState("");
	const [userData, setUserData] = useState("");

	function handleUsernameChange(event) {
		setUsername(event.target.value);
	}
	function handlePasswordChange(event) {
		setPassword(event.target.value);
	}
	function handleLogin() {
		const hashedPassword = sha256(password);
		const authKey = loginFunction(username, hashedPassword);
		setLoginResult(authKey);
		const authedData = getData(authKey);
		setUserData(authedData);
		setLoggedIn(true);
	}
	return (
		<Paper sx={{ m: 2, p: 2 }}>
			<Stack spacing={2}>
				<TextField
					required
					value={username}
					onChange={handleUsernameChange}
					id="usr-required"
					label="Username"
				/>
				<TextField
					required
					id="pwd-required"
					value={password}
					type="password"
					onChange={handlePasswordChange}
					label="Password"
				/>
				<TextField
					variant="standard"
					disabled
					id="auth-key"
					label="Login Result"
					value={loginResult}
					multiline
				/>
				<TextField
					variant="standard"
					disabled
					id="user-data"
					label="User Data"
					value={userData}
					multiline
				/>

				<Button
					variant="contained"
					onClick={handleLogin}>
					LOGIN
				</Button>
			</Stack>
		</Paper>
	);
}
