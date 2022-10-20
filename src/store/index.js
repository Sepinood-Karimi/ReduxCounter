import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counter-slice";
import uiSlice from "./ui-slice";
import authSlice from "./auth-slice";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        ui: uiSlice.reducer,
        auth: authSlice.reducer
    }
});

export default store;