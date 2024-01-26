'use client'
import React from 'react'

const Todos = () => {
    return (
        <tr className='border'> 
                    <td>101</td>
                    <td>Drink Water</td>
                    <td>Drink 5 liter of Water</td>
                    <td>Incomplete</td>
                    <td className='flex justify-center gap-x-5'>
                    <button className="px-6 py-2 text-white bg-blue-500 rounded-lg">Delete</button>
                    <button className="px-6 py-2 text-white bg-orange-500 rounded-lg">Update</button>
                    </td>
                    </tr>
    )
}

const Todo = () => {
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
                        Array(10).fill(null).map((c,i) => {
                            return (
                                <Todos key={i} />
                            )
                        })
                    }
                </tbody>
            </table>
        </section>


    </>
  )
}

export default Todo