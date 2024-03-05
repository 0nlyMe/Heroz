import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Styles/Form.css";
import removed from "../../Assests/removed.png";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/register",
        {
          name,
          email,
          password,
        }
      );
      console.log("Registration successful:", response);
      navigate(`/home`);
    } catch (error) {
      console.error("Error registering user:", error.response.data);
    }
  };

  return (
    <div className="login-container">
      <div className="box-container">
        <div className="box">
          <div className="login-form">
            <form onSubmit={handleRegistration}>
              <table>
                <thead>
                  <tr>
                    <th className="title">Heroz</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        placeholder="Username"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        placeholder="Email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        placeholder="password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        placeholder="consfirm password"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" required /> I agree to terms and
                      conditions
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button>Register</button>
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
  );
};

export default RegistrationForm;
