import {createSlice} from "@reduxjs/toolkit";

const authInitialState = {
    token: '',
    isLoggedIn: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        logout(state) {
            state.token = '';
            state.isLoggedIn = false;
        }
    }
});

export default authSlice;
export const authActions = authSlice.actions;