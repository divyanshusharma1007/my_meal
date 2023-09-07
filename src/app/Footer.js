import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer class="text-gray-600 body-font fixed bottom-0 w-full ">
      <div class="bg-teal-50">
        <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a  href="https://www.linkedin.com/in/divyanshu-sharma-b75a73221" class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
           
            <span class="ml-3 text-xl font-serif font-bold text-rose-500">My-Meal</span>
          </a>
          <p class="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 ">
           @ developed by <Link href={"/"} className="font-bold font-serif hover:underline hover:cursor-pointer">Divyanshu Sharam</Link>
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start hover:cursor-pointer">
            
            <Link  href={"https://www.linkedin.com/in/divyanshu-sharma-b75a73221"} class="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
