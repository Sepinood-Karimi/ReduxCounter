import {createSlice} from "@reduxjs/toolkit";

const counterInitialState = {
    counter : 0,
    show : true
};

export const counterSlice = createSlice({
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

export const counterActions = counterSlice.actions;