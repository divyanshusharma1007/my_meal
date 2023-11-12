"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Card from "./Card";

const InfiniteScrollComponent = ({ params }) => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=da412cd7bd074b4ba4ae8bbae56e4627&type=${params.type}`
      );
      console.log(response);
      setData((prevData) => [...prevData, ...response.data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();

    fetchData(source);

    // Cleanup function to cancel the request on component unmount
    return () => {
      source.cancel("Request canceled by cleanup");
    };
  }, [params.type]); // Add params.type to the dependency array

  return (
    <section className="pt-24 mx-3">
      <h2 className="text-3xl ml-5 py-5 font-serif font-bold">
        {params.type.replace("_", " ")}
      </h2>
      <div className="container mx-auto py-8">
        <InfiniteScroll
          dataLength={data.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((e) => (
              <Card key={e.id} value={e} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </section>
  );
};

export default InfiniteScrollComponent;
