// Import necessary dependencies
import Link from "next/link";
import React from "react";

// Define the Footer component
function Footer() {
  return (
    // Footer section with styling classes
    <footer className="text-gray-600 body-font fixed bottom-0 w-full">
      <div className="bg-teal-50">
        {/* Container for footer content */}
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          {/* Logo or site name with a link to LinkedIn profile */}
          <a href="https://www.linkedin.com/in/divyanshu-sharma-b75a73221" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl font-serif font-bold text-rose-500">My-Meal</span>
          </a>
          
          {/* Information about the developer */}
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            @ developed by <Link href={"/"} className="font-bold font-serif hover:underline hover:cursor-pointer">Divyanshu Sharma</Link>
          </p>
          
          {/* Social media link (LinkedIn in this case) */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start hover:cursor-pointer">
            <Link href={"https://www.linkedin.com/in/divyanshu-sharma-b75a73221"} className="ml-3 text-gray-500">
              {/* LinkedIn icon */}
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
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

// Export the Footer component
export default Footer;
