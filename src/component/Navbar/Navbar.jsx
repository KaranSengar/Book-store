import React from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { IoIosSunny } from "react-icons/io";


const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="logo">BookStore</div>

        <div className="list">
          <ul>
            <li>Home</li>
            <li>Course</li>
            <li>Contact</li>
            <li>About</li>
            <div className="search">
              <input type="text" placeholder="Enter the value" />
              <CiSearch className="btn" />
            </div>
            <IoIosSunny className="sun" />

          </ul>
        </div>

        <button className="login">Login</button>
      </div>
    </>
  );
};

export default Navbar;
