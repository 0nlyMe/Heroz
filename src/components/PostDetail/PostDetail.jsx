import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "../Styles/PostDetail.css";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (postId) {
      fetchPostDetail();
    }
  }, [postId]);

  const fetchPostDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/post/${postId}`
      );
      setPost(response.data.data.post);
    } catch (error) {
      console.error("Error fetching the post Details: ", error);
    }
  };

  const handleLike = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/post/${postId}/like`
      );
      setPost(response.data.data.post);
    } catch (error) {
      console.error("error liking the post");
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="post-details-main-container">
        <div className="box-container">
          <div className="box">
            <div className="post-details-container">
              <div className="post-details-img">
                <img src={post.image} />
              </div>
            </div>
            <div className="post-details-page">
              <h1 className="post-detail-title">{post.title}</h1>
              <div className="content">
                <p>{post.content}</p>
                <button>{post.category}</button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    border: "0px",
                    fontSize: "1.2rem",
                  }}
                  onClick={handleLike}
                >
                  <FontAwesomeIcon style={{ color: "white" }} icon={faHeart} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
