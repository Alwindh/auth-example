import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LoginPage } from "./pages/login.page";
import { RegisterPage } from "./pages/register.page";
import { useSelector } from "react-redux";
import { HomePage } from "./pages/home.page";

function App() {
	const user = useSelector((state) => state.auth.user);

	const availableRoutes = user ? (
		<>
			<Route
				path="/home"
				element={<HomePage />}
			/>
		</>
	) : (
		<>
			<Route
				path="/register"
				element={<RegisterPage />}
			/>
			<Route
				path="*"
				element={<LoginPage />}
			/>
		</>
	);

	return (
		<BrowserRouter>
			<Routes>{availableRoutes}</Routes>
		</BrowserRouter>
	);
}

export default App;
