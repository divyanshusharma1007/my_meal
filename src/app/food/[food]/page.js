import React from "react";
import dish from "../../../../constant/dish";
async function getData(params) {
  return fetch(
    `https://api.spoonacular.com/recipes/${params.food}/information?includeNutrition=true&apiKey=da412cd7bd074b4ba4ae8bbae56e4627`
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err, "this is error"));
}
async function page({ params }) {
  const data = await getData(params);
  // const data = dish;
  const nutritionKeys = Object?.keys(data?.nutrition);
  return (
    <>
      <div className="pt-24">
        <div className="mx-10">
          <h2 className=" text-2xl font-serif font-bold my-3 uppercase">
            {data.title} - [{" "}
            {data.dishTypes.map((e, i) => (
              <span key={e} className="font-normal ">
                {i > 0 ? "," + e : e}
              </span>
            ))}
            ]
          </h2>
        </div>
        <section className="flex flex-col items-center md:items-start md:flex-row justify-evenly mx-10">
          <img
            src={data.image}
            className="shadow-lg rounded-md "
            height={500}
            width={500}
          />

          <div className="mx-3">
            <h2 className="text-2xl font-serif mb-3 underline">summary</h2>
            <p
              className="overflow-auto   h-[300px] "
              dangerouslySetInnerHTML={{ __html: data.summary }}
            ></p>
          </div>
        </section>
        <section className="mx-10 mt-5 mb-2 ">
          <div className="flex flex-col justify-between items-start md:flex-row md:items-end">
            <h2 className="text-3xl font-serif mb-3">Instructions </h2>
            <h2 className="text-xl font-serif mb-3 ">
              Diets -{" "}
              {data?.diets.map((e, i) => {
                return (
                  <span key={e} className="font-normal ">
                    {i > 0 ? "," + e : e}
                  </span>
                );
              })}{" "}
            </h2>
          </div>
          <div>
            <ul className="list-style-bullet">
              {data.analyzedInstructions.map((e) => {
                console.log(e);
                return (
                  <div key={e.name}>
                    <h2>{e?.name}</h2>
                    <ul className="list-disc">
                      {e.steps.map((val) => (
                        <li key={val}>{val?.step}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </ul>
          </div>
        </section>
        <div className="mx-3">
          <h2 className="text-2xl font-serif underline ">Nutrition</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {nutritionKeys.map((e) => {
              return (
                <>
                  <div class="w-full p-4">
                    {Array.isArray(data.nutrition[e]) ? (
                      <h2 className="font-serif font-bold mb-3 uppercase">
                        {e}
                      </h2>
                    ) : (
                      ""
                    )}
                    <table class="w-full  border-2 p-3">
                      <tbody className="p-5">
                        {Array.isArray(data.nutrition[e])
                          ? data.nutrition[e].map((val) => {
                              return (
                                <>
                                  <tr>
                                    <td>{val.name}</td>
                                    <td>{val.amount}</td>
                                    <div>{val.unit}</div>
                                  </tr>
                                </>
                              );
                            })
                          : ""}
                      </tbody>
                    </table>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
