import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../Navbar/Navbar";


const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  console.log("Current postId:", postId);


  useEffect(() => {
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
    fetchPostDetail();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <img src={post.image} />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </>
  );
};

export default PostDetail;
