import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counter-slice";
import uiSlice from "./ui-slice";
import authSlice from "./auth-slice";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['auth']
};
const cmReducer = combineReducers({
    counter: counterSlice.reducer,
    ui: uiSlice.reducer,
    auth: authSlice.reducer
});

const persistedReducer = persistReducer(persistConfig,cmReducer);


const store = configureStore({
    reducer : persistedReducer
});


export default store;

export const persist = persistStore(store);