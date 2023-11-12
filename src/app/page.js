// Import necessary dependencies
import { categories } from "../../constant/category";
import Card from "./Card";

// Define the Home component
export default function Home() {
  return (
    <>
      {/* Container for the main content */}
      <div className="container mx-auto py-8 pt-20 pb-24">
        {/* Heading for available categories */}
        <h2 className="text-3xl ml-5 py-5 font-serif font-bold">Available categories</h2>

        {/* Container for the category cards */}
        <div className="flex justify-center">
          {/* Grid layout for category cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Mapping through the categories and rendering Card component for each */}
            {categories.map((category) => (
              <Card key={category} value={category} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

