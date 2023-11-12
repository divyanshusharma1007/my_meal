"use client"
import React, { useEffect, useState } from "react";



// Function to fetch data from Spoonacular API
async function getData(food) {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${food}/information?includeNutrition=true&apiKey=da412cd7bd074b4ba4ae8bbae56e4627`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// React component function
function Page({ params }) {
  // State for holding the fetched data
  const [data, setData] = useState(null);

  // Effect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const result = await getData(params.food);
      setData(result);
    };

    fetchData();
  }, [params.food]);

  // Render component
  return (
    <>
      {data && (
        <div className="pt-24">
          {/* Header Section */}
          <div className="mx-10">
            <h2 className="text-2xl font-serif font-bold my-3 uppercase">
              {data.title} - [{" "}
              {data.dishTypes.map((e, i) => (
                <span key={e} className="font-normal ">
                  {i > 0 ? "," + e : e}
                </span>
              ))}
              ]
            </h2>
          </div>

          {/* Main Content Section */}
          <section className="flex flex-col items-center md:items-start md:flex-row justify-evenly mx-10">
            <img
              src={data.image}
              className="shadow-lg rounded-md "
              height={500}
              width={500}
              alt={data.title}
            />

            <div className="mx-3">
              {/* Summary Section */}
              <h2 className="text-2xl font-serif mb-3 underline">Summary</h2>
              <p
                className="overflow-auto h-[300px]"
                dangerouslySetInnerHTML={{ __html: data.summary }}
              ></p>
            </div>
          </section>

          {/* Instructions Section */}
          <section className="mx-10 mt-5 mb-2">
            <div className="flex flex-col justify-between items-start md:flex-row md:items-end">
              <h2 className="text-3xl font-serif mb-3">Instructions </h2>
              <h2 className="text-xl font-serif mb-3 ">
                Diets -{" "}
                {data?.diets.map((e, i) => (
                  <span key={e} className="font-normal ">
                    {i > 0 ? "," + e : e}
                  </span>
                ))}
              </h2>
            </div>
            <div>
              <ul className="list-style-bullet">
                {data.analyzedInstructions.map((e, index) => (
                  <div key={index}>
                    <h2>{e?.name}</h2>
                    <ul className="list-disc">
                      {e.steps.map((val, stepIndex) => (
                        <li key={stepIndex}>{val?.step}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          </section>

          {/* Nutrition Section */}
          <div className="mx-3">
            <h2 className="text-2xl font-serif underline ">Nutrition</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {Object.keys(data.nutrition).map((e, index) => (
                <div key={index} className="w-full p-4">
                  {Array.isArray(data.nutrition[e]) && (
                    <h2 className="font-serif font-bold mb-3 uppercase">{e}</h2>
                  )}
                  <table className="w-full border-2 p-3">
                    <tbody className="p-5">
                      {Array.isArray(data.nutrition[e]) &&
                        data.nutrition[e].map((val, i) => (
                          <tr key={i}>
                            <td>{val.name}</td>
                            <td>{val.amount}</td>
                            <td>{val.unit}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
