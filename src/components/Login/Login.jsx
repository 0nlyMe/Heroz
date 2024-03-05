import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Styles/Form.css";
import removed from "../../Assests/removed.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/login",
        {
          email,
          password,
        }
      );

      console.log("Response:", response);

      if (response.status === 200) {
        navigate(`/home`);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error("Error registering user:", error.response.data);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="box-container">
          <div className="box">
            <div className="login-form">
              <form onSubmit={handleLogin}>
                <table>
                  <thead>
                    <tr>
                      <th className="title">Heroz</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input required type="text" placeholder="Username" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          required
                          placeholder="Email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          required
                          placeholder="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
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
                        <button>Login</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <small className="new_user">
                          New User.?
                          <a href="/register">Register</a>
                        </small>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
            <div className="img_container">
              <img src={removed} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
