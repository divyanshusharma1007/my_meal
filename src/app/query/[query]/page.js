// Import necessary libraries and components
"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Card from "./Card";

// InfiniteScrollComponent to display a list of food items with infinite scrolling
const InfiniteScrollComponent = ({ params }) => {
  // State variables for managing data, hasMore flag, and page number
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  // Function to fetch data from the Spoonacular API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=da412cd7bd074b4ba4ae8bbae56e4627&query=${params.query.replace("_", " ")}&page=${page}`
      );

      // Update state with new data and increment the page number
      setData((prevData) => [...prevData, ...response.data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Render the component
  return (
    <div className="pt-24 mx-3 pb-24">
      {/* Display the search query */}
      <h2 className="text-2xl ml-5 py-5 font-serif font-bold uppercase underline underline-offset-4">
        {params.query.replace("_", " ")}
      </h2>

      <div className="container mx-auto py-8">
        {/* Infinite Scroll component */}
        <InfiniteScroll
          dataLength={data.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {/* Grid layout for displaying food cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((e) => (
              <Card key={e.id} value={e} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

// Export the InfiniteScrollComponent as the default export
export default InfiniteScrollComponent;
