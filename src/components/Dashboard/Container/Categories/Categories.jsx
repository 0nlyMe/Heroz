import React from "react";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="main-left">
      <nav>
        <div className="main-nav-left">
          <ul>
            <li>
              <a href="#">Latest Blogs</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="categories">
        <ul>
          <li>
            <a href="#">ALL</a>
          </li>
          <li>
            <a href="#">Entertainment</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
