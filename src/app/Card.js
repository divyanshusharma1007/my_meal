// Import necessary dependencies
"use client";
import Link from "next/link";
import React from "react";

// Define the Card component
function Card({ value }) {
  // Render a link to the details page for the given category
  return (
    <Link href={`/type/${value.name.replace(" ", "_")}`}>
      {/* Card container with styling classes */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg h-74 mx-5">
        {/* Image section */}
        <img className="w-full h-52" src={value.imageUrl} alt={value?.name} />

        {/* Card content section */}
        <div className="px-6 py-4">
          {/* Category name */}
          <div className="font-bold text-xl mb-2">{value?.name}</div>

          {/* Description */}
          <p className="text-gray-700 text-base">{value?.description}</p>
        </div>
      </div>
    </Link>
  );
}

// Export the Card component
export default Card;
