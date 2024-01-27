'use client'
// import Todo from "@/components/Todo";
const Todo = dynamic(() => import('@/components/Todo'), {
  ssr: false
})
import { ChangeColorToColor } from "@/provider/redux/ColorChange";
import { AddTodo } from "@/provider/redux/Todos";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function Home() {
  // const state = useSelector((state)=> state.ChangeColor.color);
  // console.log(state)

  // const dispatchColor = useDispatch()

  const state = useSelector((state) => state.todos.todosArray);
  // console.log(state);
  const dispatchTodos = useDispatch();

  const [form, setForm] = useState({
    title: '',
    description: ''
  })

  const formChangeHandler = (e) => {
    setForm({...form, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
        const item = {
          ...form,
          isCompleted: false,
          id: new Date().getTime()
        }

        dispatchTodos(AddTodo(item))
        setForm({
          title: '',
          description: ''
        })
        toast.success("Todo added")
    } catch (error) {
      console.log("messge", error.message);
    }
  }

  return (
    <>
        {/* <div className={`h-32 w-32`} style={{backgroundColor: state}}> 

        </div>
        <h3>Pick the color to change redux state</h3>
      <input className="mt-5" onChange={(e) => dispatchColor(ChangeColorToColor(e.target.value))} type="color" /> */}
        <div className="min-h-screen md:w-[70%] mx-auto ">
          <form onSubmit={handleSubmit} className="w-full mb-3 mx-auto py-10">
            <div className="mb-3">
              <label>Title</label>
              <input name="title" onChange={formChangeHandler} value={form.title} type="text" className="w-full ring-blue-500 rounded-lg py-4 ring-1 px-4 border" placeholder="Enter Title" />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <textarea name="description" onChange={formChangeHandler} value={form.description} rows={3} className="w-full ring-blue-500 py-4 rounded-lg ring-1 px-4 border" placeholder="Enter Description"></textarea>
            </div>
            <button type="submit" className="px-6 py-2 text-white bg-blue-500 rounded-lg">Add Todo</button>
          </form>
          <Todo />
        </div>
    </>
  );
}
