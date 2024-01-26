'use client'
import Todo from "@/components/Todo";
import { ChangeColorToColor } from "@/provider/redux/ColorChange";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state)=> state.ChangeColor.color);
  console.log(state)

  const dispatcher = useDispatch()

  return (
    <>
        {/* <div className={`h-32 w-32`} style={{backgroundColor: state}}> 

        </div>
        <h3>Pick the color to change redux state</h3>
      <input className="mt-5" onChange={(e) => dispatcher(ChangeColorToColor(e.target.value))} type="color" /> */}

      <br />
      <br />

        <div className="min-h-screen md:w-[70%] mx-auto ">
          <form className="w-full mb-3 mx-auto py-10">
            <div className="mb-3">
              <label>Title</label>
              <input type="text" className="w-full ring-blue-500 rounded-lg py-4 ring-1 px-4 border" placeholder="Enter Title" />
            </div>
            <div className="mb-3">
              <label>Description</label>
              <textarea rows={3} className="w-full ring-blue-500 py-4 rounded-lg ring-1 px-4 border" placeholder="Enter Description"></textarea>
            </div>
            <button className="px-6 py-2 text-white bg-blue-500 rounded-lg">Add Todo</button>
          </form>
          <Todo />
        </div>
    </>
  );
}
