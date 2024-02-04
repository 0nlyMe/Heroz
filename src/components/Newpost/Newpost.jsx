import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { storage, ref, uploadBytes, getDownloadURL } from "../../firebase";
import removed from "../removed.png";
import "../Styles/Form.css";

const Newpost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();

  const uploadImage = async (imageInfo) => {
    const { title, content, image, selectedCategory } = imageInfo;

    try {
      // Upload media to firebase
      const storageRef = ref(storage);
      const folder = `media/${Date.now()}_${image.name}`;
      const mediaRef = ref(storageRef, folder);

      // upload to firebase
      await uploadBytes(mediaRef, image);

      // downloadURL from the firebase
      const mediaURL = await getDownloadURL(mediaRef);

      // API call to MongoDB
      const response = await axios.post("http://localhost:5000/api/post/add", {
        title,
        content,
        mediaURL,
        category: selectedCategory,
      });
    } catch (error) {
      console.error("Error uploading image and adding post:", error);

      if (error.response && error.response.data) {
        console.error("Server error:", error.response.data);
      }
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!selectedCategory) {
        console.error("please select a category");
        return;
      }
      await uploadImage({ title, content, image, selectedCategory });
      navigate(`/home`);
    } catch (error) {
      console.error("Error in handle submit:", error);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="box-container">
          <div className="box">
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <table>
                  <thead>
                    <tr>
                      <th className="title">coinBlog</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          required
                          placeholder="title"
                          type="text"
                          name="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          required
                          placeholder="Content"
                          type="text"
                          name="content"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          className="input-image"
                          required
                          type="file"
                          name="image"
                          onChange={handleFileChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="categories">Category</label>
                        <select
                          id="categories"
                          name="categories"
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                          <option value="All">All</option>
                          <option value="News">News</option>
                          <option value="Travel">Travel</option>
                          <option value="Entertainment">Entertainment</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button>Submit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <img className="image-container" src={removed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpost;
