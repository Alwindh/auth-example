import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth.slice.js";

export default configureStore({
	reducer: { auth: authReducer },
});
