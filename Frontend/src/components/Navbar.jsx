import React from "react";
import { useAuth } from "../store/useAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { authUser, logoutUser,isLogingOut} = useAuth();

  return (
    <div className="fixed w-full flex justify-between items-center bg-[#35132f] text-white px-10 py-5 ">
      <Link to={"/"}>
        <div className="font-bold text-2xl">Imagify</div>
      </Link>
      <div>
        <ul className="flex gap-20  ">
          <li>Home</li>
          <li>About</li>
          <li>Contect Us</li>
        </ul>
      </div>
      <div>
        {!authUser ? (
          <div className="flex gap-5 ">
            <Link to={"/login"} className="bg-[#f67b50] px-5 py-1 rounded-full w-30 h-12 flex justify-center items-center font-bold">
                Login
            </Link>
            <Link to={"/signup"} className="bg-[#f67b50] px-5 py-1 rounded-full w-30 h-12 flex justify-center items-center font-bold">
              Sign Up
            </Link>
          </div>
        ) : (
            <button onClick={logoutUser} className="bg-[#d3b1c2] text-[#211522] font-medium px-5 py-1 rounded-full w-30 h-12">
              {
                isLogingOut ? "Logging out..." : "Logout"
              }
            </button>
          
        )}
      </div>
    </div>
  );
};

export default Navbar;
