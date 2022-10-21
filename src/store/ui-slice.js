import {createSlice} from "@reduxjs/toolkit";

const uiInitialState = {
    notification: null
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        notify(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
        clearNotify(state){
            state.notification = null;
        }
    }
});

export default uiSlice;
export const uiActions = uiSlice.actions;