import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counter-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
    reducer : {
        counter : counterSlice.reducer,
        ui: uiSlice.reducer
    }
});

export default store;