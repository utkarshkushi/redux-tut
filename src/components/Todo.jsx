'use client'
import { DeleteTodo, UpdateTodo } from '@/provider/redux/Todos'
import { Check, X } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Todos = ({data, index}) => {
    const dispatch = useDispatch()
    const updateTodoByIndex = () => {
        dispatch(UpdateTodo(index));
        toast.info("Todo Updated")
    }
    const deleteTodoByIndex = (index) => {
        dispatch(DeleteTodo(index));
        toast.success("Todo Deleted")
    }
    return (
        <tr className='border'> 
                    <td className={`${data.isCompleted ? ('line-through') : (``)}`}>{data.id}</td>
                    <td className={`${data.isCompleted ? ('line-through') : (``)}`}>{data.title}</td>
                    <td className={`${data.isCompleted ? ('line-through') : (``)}`}>{data.description}</td>
                    <td>{data.isCompleted ? (
                        <div className='flex justify-center items-center'>
                            <Check color='green' />
                        </div>
                    ) : (
                        <div className='flex justify-center items-center'>
                            <X color='red' />
                        </div>
                    )}</td>
                    <td className='flex justify-center gap-x-5'>
                    <button onClick={() => deleteTodoByIndex(index)} className="px-6 py-2 text-white bg-blue-500 rounded-lg">Delete</button>
                    {!data.isCompleted && (<button onClick={updateTodoByIndex} className="px-6 py-2 text-white bg-orange-500 rounded-lg">Update</button>)}
                    </td>
                    </tr>
    )
}

const Todo = () => {

    const todosState = useSelector((state) => state.todos.todosArray);

  return (
    <>
        <section className="py-10 w-full">
            <table className="w-full border mx-auto table-auto text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todosState && todosState.length > 0 ? (
                            todosState.map((c,i) => {
                                return (
                                    <Todos data={c} index={i} key={i} />
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan={5}> No Todos are Added Yet </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </section>


    </>
  )
}

export default Todo