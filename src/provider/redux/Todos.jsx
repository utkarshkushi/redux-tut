import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: 'todos',
    initialState: {
        todosArray:[]
    },
    reducers:{
        AddTodo(state, action){
            state.todosArray.push(action.payload)
        }
    }
})

export const {AddTodo} = TodoSlice.actions