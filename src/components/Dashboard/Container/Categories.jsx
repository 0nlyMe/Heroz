import "../../../Styles/Categories.css";
import { useCategory } from "../../../Contexts/CategoryContext";

const Categories = () => {
  const { setSelectedCategory } = useCategory();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="main-left">
      <nav>
        <div className="main-nav-left">
          <ul>
            <li>
              <p>Categories</p>
            </li>
          </ul>
        </div>
      </nav>
      <div className="categories">
        <ul>
          <li>
            <button
              style={{
                backgroundColor: "transparent",
                border: "0px",
              }}
              onClick={() => handleCategoryClick("")}
            >
              ALL
            </button>
          </li>
          <li>
            <button
              style={{
                backgroundColor: "transparent",
                border: "0px",
              }}
              onClick={() => handleCategoryClick("Entertainment")}
            >
              Entertainment
            </button>
          </li>
          <li>
            <button
              style={{
                backgroundColor: "transparent",
                border: "0px",
              }}
              onClick={() => handleCategoryClick("News")}
            >
              News
            </button>
          </li>
          <li>
            <button
              style={{
                backgroundColor: "transparent",
                border: "0px",
              }}
              onClick={() => handleCategoryClick("Travel")}
            >
              Travel
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;
