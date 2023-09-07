"use client";
import Link from "next/link";
import React, { createRef } from "react";
import { useRouter } from 'next/navigation'
 
const Navbar = () => {
  let input = createRef();
  const router = useRouter()
  return (
    <nav className="bg-gray-800 p-4 fixed w-full ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-xl font-semibold">My-Meal</div>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            ref={input}
          />
          <button onClick={()=>{
            router.push(`../query/${input.current.value.replace(" ","_")}`)
            input.current.value=""
            }} className="bg-gray-700 text-white px-4 py-2 rounded-lg ml-2" >
            Search
          </button>
          {/* Other Navbar Items */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
