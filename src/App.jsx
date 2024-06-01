import "./App.css";
import { useState } from "react";
import { LoginComponent } from "./components/login.comp";
import { Container } from "@mui/material";
import { ReportsComponent } from "./components/reports.comp";
function App() {
	const [loggedIn, setLoggedIn] = useState(false);
	return (
		<Container>
			{!loggedIn && <LoginComponent setLoggedIn={setLoggedIn} />}
			{loggedIn && <ReportsComponent setLoggedIn={setLoggedIn} />}
		</Container>
	);
}

export default App;
