import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-conatainer">
            <div className="company-logo">
              <Link to="/home">
                <h4>coinBlog</h4>
              </Link>
            </div>
            <div className="menu-bar">
              <Link to="/home">
                <h4>Home</h4>
              </Link>
              <Link to="/home">
                <h4>Search</h4>
              </Link>
              <Link to="/home">
                <h4>About us</h4>
              </Link>
              <Link to="/post/add">
                <h4>Add Post</h4>
              </Link>
            </div>
            <div className="acc-details">
              <Link to="/login">
                <button className="login-btn">LOG IN</button>
              </Link>
              <Link to="/register">
                <button className="signup-btn ">Get Started</button>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
