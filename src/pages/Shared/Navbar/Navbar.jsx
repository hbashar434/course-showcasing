import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";
import { LiaTimesCircleSolid } from "react-icons/lia";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(true);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="bg-emerald-500 p-4 w-full fixed z-10">
      <div className=" max-w-[1440px] container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl hidden md:block">
          <Link to="/">Course Showcase</Link>
        </div>

        <div className="md:hidden">
          {isDrawerOpen ? (
            <RiMenuFoldLine
              className="text-white text-2xl cursor-pointer"
              onClick={toggleDrawer}
            />
          ) : (
            <RiMenuUnfoldLine
              className="text-white text-2xl cursor-pointer"
              onClick={toggleDrawer}
            />
          )}
        </div>

        <div className="hidden md:flex space-x-4 text-lg">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/" className="text-white">
            Dashboard
          </Link>
        </div>

        <div className="md:flex items-center space-x-4">
          {user ? (
            <button className="my-btn" onClick={() => setUser(!user)}>
              Logout
            </button>
          ) : (
            <Link to="/" className="my-btn">
              <button onClick={() => setUser(!user)}>Login</button>
            </Link>
          )}
        </div>
      </div>

      {isDrawerOpen && (
        <div className="bg-emerald-500 fixed top-0 left-0 h-screen w-2/3 md:w-1/3 flex flex-col items-center pt-16">
          <div className="flex justify-end p-4">
            <button
              onClick={toggleDrawer}
              className="text-gray-700 dark:text-gray-300 p-1 my-bg-tertiary rounded-full shadow-md shadow-slate-900"
            >
              <LiaTimesCircleSolid size={24} />
            </button>
          </div>
          <Link
            to="/"
            className="text-white text-2xl p-4"
            onClick={toggleDrawer}
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-white text-2xl p-4"
            onClick={toggleDrawer}
          >
            Dashboard
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
