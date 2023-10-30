import { Link } from "react-router-dom";
import bannerPic from "../img/wasafati-banner.png"

export function Homepage() {
  return (
    <div className="flex flex-col items-center min-h-screen py-10">
      <div className="flex flex-col sm:flex-row items-center sm:flex-row-reverse  sm:p-2 max-w-6xl">
        <img
          src={bannerPic}
          alt="Wasafati logo in the middle, and around it six pciture of various food and cooking ingredients"
          className="p-4 w-64 sm:w-96"
        />
        <div className="flex flex-col">
          <div className="p-6">
            {" "}
            <h1 className="text-3xl font-bold lg:text-5xl">
              Wasafati, your family cookbook
            </h1>
            <p className="lg:text-lg">
              Savor Family Favorites: Delight in cherished recipes from our
              family cookbook, bringing warmth and nostalgia to every meal.
              Explore our family recipes, and submit yours today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row mx-4 mb-4 gap-2">
            <Link
              to="/listCategory"
              className="bg-red-600 hover:bg-red-300 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Explore Categories
            </Link>
            <Link
              to="/submitRecipe"
              className="bg-stone-900 hover:bg-stone-400 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit Your Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
