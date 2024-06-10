import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, action) => {
			console.log(action);
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
