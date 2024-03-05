import "../../../Styles/Post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCategory } from "../../../Contexts/CategoryContext";
import { Link } from "react-router-dom";

const Post = () => {
  const { selectedCategory } = useCategory();
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  useEffect(() => {
    fetchPosts();
  }, [selectedCategory, sortBy]);

  const fetchPosts = async () => {
    const apiUrl = selectedCategory
      ? `http://localhost:5000/api/post/category/${selectedCategory}`
      : "http://localhost:5000/api/post/posts";
    try {
      let response;

      if (searchTerm.trim() === "") {
        response = await axios.get(apiUrl, {
          params: { sortBy },
        });
      } else {
        response = await axios.get(
          `http://localhost:5000/api/post/search/${searchTerm}`
        );
      }
      if (response.data && response.data.data && response.data.data.posts) {
        setPosts(response.data.data.posts);
      } else {
        console.error("Invalid response structure:", response);
      }
    } catch (error) {
      console.error("Error fetching the posts", error);
    }
  };

  const handleInputChange = async (e) => {
    const apiUrl = selectedCategory
      ? `http://localhost:5000/api/post/category/${selectedCategory}`
      : "http://localhost:5000/api/post/posts";
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    let response;

    try {
      if (searchTerm.trim() === "") {
        response = await axios.get(apiUrl, {
          params: { sortBy },
        });
      } else {
        response = await axios.get(
          `http://localhost:5000/api/post/search/${searchTerm}`,
          {
            params: { sortBy },
          }
        );
      }
      setPosts(response.data.data.posts);
    } catch (error) {
      console.error("Error fetching Search posts: ", error);
    }
  };

  const handleSortBy = (sortOperation) => {
    setSortBy(sortOperation);
  };

  return (
    <>
      <div className="main-mid">
        <nav>
          <div className="main-mid-nav-container">
            <div className="main-nav-mid">
              <div className="sort-by">
                <ul>
                  <li>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "0px",
                        color: "white",
                        fontSize: "1rem",
                        margin: "1rem",
                      }}
                      href="#"
                    >
                      Sort By:
                    </button>
                    <ul>
                      <li>
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "0px",
                            color: "white",
                            fontSize: "1rem",
                            margin: "1rem",
                          }}
                          onClick={() => handleSortBy("newest")}
                        >
                          Newest
                        </button>
                      </li>
                      <li>
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "0px",
                            color: "white",
                            fontSize: "1rem",
                            margin: "1rem",
                          }}
                          onClick={() => handleSortBy("popular")}
                        >
                          Popular
                        </button>
                      </li>
                      <li>
                        <button
                          style={{
                            backgroundColor: "transparent",
                            border: "0px",
                            color: "white",
                            fontSize: "1rem",
                            margin: "1rem",
                          }}
                          onClick={() => handleSortBy("az")}
                        >
                          A-Z
                        </button>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="search-btn">
                <ul>
                  <li>
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleInputChange}
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div>
          <div className="list-display">
            <div className="card-layout">
              {Array.isArray(posts) && posts.length > 0 ? (
                posts.map((post) => (
                  <div className="card-container" key={post._id}>
                    <Link key={post._id} to={`/post/${post._id}`}>
                      <div className="card">
                        <img src={post.image} alt={post.title} />
                        <div className="post-details">
                          <h4>{post.title}</h4>
                          <h5 className="content">{post.content}</h5>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No post found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
