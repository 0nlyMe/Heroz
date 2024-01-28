import stars from "../../Assests/stars.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Post.css";

const Post = () => {
  return (
    <>
      <div className="main-mid">
        <nav>
          <div className="main-mid-nav-container">
            <div className="main-nav-mid">
              <div className="sort-by">
                <ul>
                  <li>
                    <a href="#">Sort By:</a>
                    <ul>
                      <li>
                        <a href="#">popular</a>
                      </li>
                      <li>
                        <a href="#">Newest</a>
                      </li>
                      <li>
                        <a href="#">A-Z</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="search-btn">
                <ul>
                  <li>
                    <a href="#">Search</a>
                  </li>
                </ul>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div className="list-display">
            <div className="card-layout">
              <div className="card">
                <img src={stars} alt="" />
                <h4>Post 1</h4>
              </div>
              <div className="card">
                <img src={stars} alt="" />
                <h4>Post 1</h4>
              </div>
              <div className="card">
                <img src={stars} alt="" />
                <h4>Post 1</h4>
              </div>
              <div className="card">
                <img src={stars} alt="" />
                <h4>Post 1</h4>
              </div>
              <div className="card">
                <img src={stars} alt="" />
                <h4>Post 1</h4>
              </div>
              <div className="card">
                <img src={stars} alt="" />
                <h4>Post 1</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
