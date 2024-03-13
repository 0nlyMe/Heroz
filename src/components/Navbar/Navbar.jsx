import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { decodeToken } from "../../utils/jwtUtils";

// Internal Imports
import "../../Styles/Navbar.css";

// Smart contract Imports
import { CoinBlogContext } from "../../Contexts/SmartContractContext/coinBlogContext";

const NavBar = () => {
  const { walletAddress, connectWallet } = useContext(CoinBlogContext);
  const [user, setuser] = useState(null);

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
    } catch (error) {
      console.error("Error connecting to the wallet", error);
    }
  };

  useEffect(() => {
    // if token is present in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      // decode token and set User state
      const decodedToken = decodeToken(token);
      setuser(decodedToken.name);
    } else {
      // if not present return null
      setuser(null);
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setuser(null);
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav-conatainer">
            <div className="company-logo">
              <Link to="/home">
                <h4>coinBlog</h4>
              </Link>
            </div>
            <div className="menu-bar">
              <Link to="/home">
                <h4>Home</h4>
              </Link>
              <Link to="/home">
                <h4>Search</h4>
              </Link>
              <Link to="/home">
                <h4>About us</h4>
              </Link>
              <Link to="/post/add">
                <h4>Add Post</h4>
              </Link>
            </div>
            <div className="acc-details">
              {user ? (
                <>
                  <span className="login-btn">{user}</span>
                  <button
                    onClick={handleLogOut}
                    className="logout-btn signup-btn"
                  >
                    Logout
                  </button>
                  {walletAddress ? (
                    <p>Connected with wallet address: {walletAddress}</p>
                  ) : (
                    <button onClick={handleConnectWallet} className="login-btn">
                      connectWallet
                    </button>
                  )}
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="login-btn">Login</button>
                  </Link>
                  <Link to="/register">
                    <button className="signup-btn">Get Started</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
