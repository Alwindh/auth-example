import { useDispatch } from "react-redux";
import { logout } from "../state/auth.slice";

export function HomePage() {
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Home Page</h1>
			<p>Welcome to the home page!</p>
			<div onClick={() => dispatch(logout())}>LOGOUT</div>
		</div>
	);
}
