import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../img/logo-wasafati.png";


export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md flex flex-col m-2 rounded-lg">
      <div className="py-2 sm:px-8 px-4 flex flex-row justify-between">
        <Link to="homePage">
          {" "}
          <img src={logo} className="sm:w-14 w-10"></img>
        </Link>
        <button
          className="p-2 text-stone-500 font-bold rounded-2xl"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>
      <div
        className={`${open ? "block" : "hidden"} w-full`}
        id="navbar-hamburger"
      >
        <ul className="flex flex-col items-center font-medium mt-4 rounded-lg">
          <li>
            <Link
              to="/homePage"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              aria-current="page"
              onClick={() => setOpen(!open)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/listCategory"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              onClick={() => setOpen(!open)}
            >
              Explore Categories
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              onClick={() => setOpen(!open)}
            >
              Search a Recipe
            </Link>
          </li>
          <li>
            <Link
              to="/submitRecipe"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              onClick={() => setOpen(!open)}
            >
              Submit Your Recipes{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              onClick={() => setOpen(!open)}
            >
              About Wasafati
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Header