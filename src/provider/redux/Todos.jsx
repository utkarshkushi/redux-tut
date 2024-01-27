import { getTodos, saveTodos } from "@/constant/LocalStorage";
import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: 'todos',
    initialState: {
        todosArray: getTodos() || []
    },
    reducers:{
        AddTodo(state, action){
            state.todosArray.push(action.payload);
            saveTodos(state.todosArray);
        },
        UpdateTodo(state, action){
            state.todosArray = state.todosArray.filter((curr, i) => {
                if(i === action.payload){
                    curr.isCompleted = true
                }
                return curr
            })
            saveTodos(state.todosArray);
        },
        DeleteTodo(state, action){
            state.todosArray = state.todosArray.filter((curr, i) => i !== action.payload)
            saveTodos(state.todosArray);
        }
    }
})

export const {AddTodo, UpdateTodo, DeleteTodo} = TodoSlice.actions