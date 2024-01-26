import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <header className='w-full px-5 py-3 shadow'>
            <nav className='w-full mx-auto md:w-[70%] flex justify-between items-center'>
                <Link href={"/"} className='text-xl font-semibold'>Todo App</Link>
            </nav>
        </header>
    </div>
  )
}

export default NavBar