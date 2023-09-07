import Image from "next/image";
import { categories } from "../../constant/category";
import Card from "./Card";
export default function Home() {
  return (
    <>
      <div class="container mx-auto py-8 pt-20 pb-24">
        <h2 className="text-3xl ml-5 py-5 font-serif font-bold ">Avilabe categories</h2>
        <div className="flex justify-center">

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((e) => (
            <Card key={e} value={e} />
            ))}
        </div>
            </div>
      </div>
    </>
  );
}
