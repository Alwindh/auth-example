import logins from "../mockdata/logins.json";
import auths from "../mockdata/auths.json";

export function loginFunction(username, password) {
	const foundLogin = logins.find((login) => login.username === username);
	console.log(foundLogin);
	if (foundLogin !== undefined && foundLogin.password === password) {
		console.log("Login successful");
		const authToken = getAuthToken(username);
		return authToken;
	}

	return "Failed to log in. Both the username and password are 'test'";
}

function getAuthToken(userId) {
	const foundAuth = auths.find((auth) => auth.userId === userId);
	if (foundAuth) {
		return foundAuth.authToken;
	}
	return "Failed to get auth token";
}
