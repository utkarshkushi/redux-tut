'use client'
import { Check, X } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const Todos = ({data}) => {
    return (
        <tr className='border'> 
                    <td className={`${data.isCompleted ? ('line-through') : (``)}`}>{data.id}</td>
                    <td>{data.title}</td>
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
                    <button className="px-6 py-2 text-white bg-blue-500 rounded-lg">Delete</button>
                    {!data.isCompleted && (<button className="px-6 py-2 text-white bg-orange-500 rounded-lg">Update</button>)}
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
                                    <Todos data={c} key={i} />
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