import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: 'todos',
    initialState: {
        todosArray:[]
    },
    reducers:{
        AddTodo(state, action){
            state.todosArray.push(action.payload)
        },
        UpdateTodo(state, action){
            state.todosArray = state.todosArray.filter((curr, i) => {
                if(i === action.payload){
                    curr.isCompleted = true
                }
                return curr
            })
        },
        DeleteTodo(state, action){
            state.todosArray = state.todosArray.filter((curr, i) => i !== action.payload)
        }
    }
})

export const {AddTodo, UpdateTodo, DeleteTodo} = TodoSlice.actions