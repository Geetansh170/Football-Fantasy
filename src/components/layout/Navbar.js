import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-danger shadow-sm p-3 mb-5 rounded'>
      <h1>
        <i className='fas fa-futbol' />
        <b> Football Fantasy </b>
      </h1>
      <ul>
        <li>
          <Link to='/about'>
            <b>About</b>
          </Link>
        </li>
        <li>
          <Link to='/'>
            {" "}
            <b>Home</b>{" "}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
