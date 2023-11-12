"use client"
// Import necessary dependencies
import React, { createRef } from "react";
import { useRouter } from 'next/navigation';

// Define the Navbar component
const Navbar = () => {
  // Create a reference for the input field
  let input = createRef();
  
  // Get the router object from Next.js
  const router = useRouter();

  // Return the JSX for the Navbar
  return (
    <nav className="bg-gray-800 p-4 fixed w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or site name */}
        <div className="flex items-center">
          <div className="text-white text-xl font-semibold">My-Meal</div>
        </div>
        
        {/* Search input and button */}
        <div className="flex items-center">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            ref={input}
          />
          
          {/* Search button */}
          <button
            onClick={() => {
              // Navigate to the search page with the input value as a parameter
              router.push(`../query/${input.current.value.replace(" ", "_")}`);
              
              // Clear the input field
              input.current.value = "";
            }}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg ml-2"
          >
            Search
          </button>
          
          {/* Other Navbar Items */}
        </div>
      </div>
    </nav>
  );
};

// Export the Navbar component
export default Navbar;
