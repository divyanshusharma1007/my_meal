"use client";
import Link from "next/link";
import React, { useState } from "react";

function Card({ value }) {
    
  return (
    <Link href={`/type/${value.name.replace(" ","_")}`}>
      <div class="max-w-sm rounded overflow-hidden shadow-lg h-74 mx-5">
        <img class="w-full h-52" src={value.imageUrl} alt={value?.name} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{value?.name}</div>
          <p class="text-gray-700 text-base">{value?.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
