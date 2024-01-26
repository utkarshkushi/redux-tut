'use client'
import { ChangeColorToColor } from "@/provider/redux/ColorChange";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state)=> state.ChangeColor.color);
  console.log(state)

  const dispatcher = useDispatch()

  return (
    <>
        <div className={`h-32 w-32`} style={{backgroundColor: state}}> 

        </div>

        <button onClick={() => dispatcher(ChangeColorToColor()) } className="bg-red-500 text-white px-2 py-1 mt-5">
          click me to change color
        </button>
    </>
  );
}
