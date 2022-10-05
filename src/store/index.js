import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterInitialState = {
    counter : 0,
    show : true
}

const counterSlice = createSlice({
    name : 'counter',
    initialState : counterInitialState,
    reducers : {
        INCREMENT(state){
            state.counter+=1;
        },
        DECREMENT(state){
            state.counter = state.counter -1;
        },
        INCREASE(state,action){
            state.counter = state.counter + action.payload;
        },
        TOGGLE(state){
            state.show = !state.show;
        }
    }
});

const store = configureStore({
    reducer : counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;