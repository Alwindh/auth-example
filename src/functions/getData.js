import permissions from "../mockdata/permissions.json";

export function getData(authToken) {
	const permission = permissions.find((permission) => permission["authToken"] === authToken);
	if (permission) {
		return permission["data"];
	}
	return "Failed to get data, user not logged in or not authorized.";
}
