import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import "../../Styles/PostDetail.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [like, setLike] = useState(false);

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
      console.log(response.data);
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
      setLike(!like);
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
      <div className="form-post-details-main-container">
        <div className="form-box-container">
          <div className="form-box">
            <div className="form-post-details-container">
              <div className="form-post-details-img">
                <img src={post.image} />
              </div>
            </div>
            <div className="form-post-details-page">
              <h1 className="form-post-detail-title">{post.title}</h1>
              <div className="form-content">
                <p>{post.content}</p>
                <div className="author_details">
                  <p>
                    Author Name: <small>{post.author.name}</small>
                  </p>
                </div>

                <div className="like_btn_icons">
                  <button>{post.category}</button>
                  <button
                    className="like_btn"
                    style={{
                      backgroundColor: "transparent",
                      border: "0px",
                      fontSize: "1.2rem",
                    }}
                    onClick={handleLike}
                  >
                    {like ? (
                      <AiOutlineHeart style={{ color: "white" }} />
                    ) : (
                      <AiFillHeart style={{ color: "white" }} />
                    )}
                  </button>
                </div>
              </div>
              <div className="donate_btn">
                <button>Donate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
