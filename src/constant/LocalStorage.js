'use client'

export const getTodos = () =>{
    if(typeof window !== 'undefined'){
        return JSON.parse(localStorage.getItem('todos'));
    }
}

export const saveTodos = (todos) =>{
    localStorage.setItem('todos', JSON.stringify(todos));
}