// Import necessary libraries and components
"use client";
import Link from "next/link";
import React from "react";

// Card component to display individual food items
function Card({ value }) {
  return (
    // Link component for navigation to individual food page
    <Link href="/food/[id]" as={`/food/${value?.id}`}>
      {/* Card container with image and information */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
        {/* Food image */}
        <img className="w-full h-52" src={value.image} alt={value?.name} />

        {/* Card content */}
        <div className="px-6 py-4">
          {/* Food title */}
          <div className="font-bold text-xl mb-2">{value?.title}</div>
          
          {/* Food description */}
          <p className="text-gray-700 text-base">{value?.description}</p>
        </div>
      </div>
    </Link>
  );
}

// Export the Card component as the default export
export default Card;
