import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <header className="bg-white dark:bg-gray-800">
        <nav>
          <div className="container px-6 py-3 mx-auto lg:flex lg:justify-between lg:items-center">
            <div className="flex items-center justify-between">
              <div>
                <Link
                  className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
                  to="/"
                >
                  <img src="" alt="" />
                </Link>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className="items-center lg:flex">
              <div className="flex flex-col lg:flex-row lg:mx-6">
                <Link
                  className="my-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 lg:mx-4 lg:my-0"
                  to="/home"
                >
                  Home
                </Link>
                
              </div>

              <div className="flex justify-center lg:block">
                <Link
                  className="relative text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                  to='/home'
                >Get Started</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="container px-6 py-16 mx-auto">
          <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
                  Best Place To Choose Your Clothes
                </h1>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Porro beatae error laborum ab amet sunt recusandae? Reiciendis
                  natus perspiciatis optio.
                </p>
                <button className="w-full px-3 py-2 mt-6 text-xs font-medium text-white uppercase transition-colors duration-200 transform bg-gray-500 rounded-md lg:w-auto hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                  Get Started
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
              <img
                className="w-full h-full lg:max-w-2xl"
                src="https://image.freepik.com/free-vector/tiny-cooks-making-spaghetti-dinner-isolated-flat-illustration_74855-11092.jpg"
                alt="Catalogue-pana.svg"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
