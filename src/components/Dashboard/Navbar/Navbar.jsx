import React from "react";
import "./Navbar.css"

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-conatainer">
            <div className="company-logo">coinBlog</div>
            <div className="menu-bar">
              <a href="#" className="a">
                Home
              </a>
              <a href="#" className="a">
                search
              </a>
              <a href="#" className="a">
                About us
              </a>
              <a href="#" className="a">
                Add Post
              </a>
            </div>
            <div className="acc-details">
              <button className="login-btn">LOG IN</button>
              <button className="signup-btn ">Get Started</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
