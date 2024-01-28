import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import removed from "../../Assests/removed.png";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/user/userdetails"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("error fetching user data", error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <>
      <div className="main-right">
        <nav>
          <div className="main-nav-right">
            <ul>
              <li>
                <a href="#">Users</a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <div className="users">
            <table>
              <tbody>
                <tr>
                  <td>
                    <ul className="users-list">
                      {users.map((user) => (
                        <li className="user-card" key={user._id}>
                          <div className="card-img-container">
                            <img src={removed} alt="User Avatar" />
                          </div>
                          <div className="user-info">
                            <p>{user.name}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
