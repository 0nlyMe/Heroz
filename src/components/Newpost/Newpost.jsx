import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Newpost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [media, setMedia] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/post/", {
        title,
        content,
        media,
      });
      console.log("Post added successfully:", response);
      navigate(`/dashboard`);
    } catch (error) {
      console.error("Error adding post:", error.response.data);
    }
  };

  return (
    <div>
      <h1>Add post</h1>
      <div className="login-container">
        <div className="box-container">
          <div className="box">
            <div className="login-form">
              <form onSubmit={handleSubmit}>
                <table>
                  <thead>
                    <tr>
                      <th className="title">coin Blog</th>
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
                          required
                          placeholder="image"
                          type="file"
                          name="media"
                          value={media}
                          onChange={(e) => setMedia(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input required type="checkbox" /> I agree to terms and
                        conditions
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
            <img className="image-container" src="{removed}" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newpost;
