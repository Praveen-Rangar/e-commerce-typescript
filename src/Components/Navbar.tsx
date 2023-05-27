import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props: any) => {
  return (
    <div className=" hidden md:block border-b border-gray-100  md:py-[10px]  bg-white ">
      <div className="max-w-[1264px] max-h-[70px] flex items-center justify-between px-5 py-2   mx-3 ">
        <img
          className="w-32  md:w-[140px] md:h-[50px]"
          src="https://trycasuals.com/wp-content/uploads/2019/06/print-1-1.svg"
          alt="error"
        />

        <div className="items-center justify-between hidden md:flex ">
          <ul className=" md:flex md:items-center md:space-x-8 md:text-[14px] md:text-gray-500 hidden   ">
            <li></li>
            <Link to="/">Home</Link>

            <Link to="/LoginPage">
              <button className="shadow-md px-4 py-2 bg-white border border-gray-400 rounded-md text-[16px]">
                Login
              </button>
            </Link>
            <Link to="/SignUpPage">
              <button className="shadow-md px-4 py-2 text-white rounded bg-red-500 text-[16px]">
                SignUp
              </button>
            </Link>

            <Link to="/cart" className="cursor-pointer ">
              {props.mainCount}
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
