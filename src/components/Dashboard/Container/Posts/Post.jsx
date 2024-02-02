import { useEffect, useState } from "react";
import axios from "axios";
import stars from "../../Assests/stars.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Post.css";
import { Link } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/post/posts"
        );
        setPosts(response.data.data.posts);
      } catch (error) {
        console.error("Error fetching the posts", error);
      }
    };
    fetchPosts();
  }, []);

  const handleSearch = () => {
    const filterdPost = posts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPosts(filterdPost);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
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
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleInputChange}
                      onInput={handleSearch}
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
              {posts.map((post) => (
                <div className="card-container" key={post._id}>
                  <Link key={post._id} to={`/post/${post._id}`}>
                    <div className="card">
                      <img src={post.image} alt={post.title} />
                      <h4>{post.title}</h4>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
