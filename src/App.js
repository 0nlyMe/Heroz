import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registeration/Registration";
import Home from "./components/Dashboard/Dashboard";
import Newpost from "./components/Newpost/Newpost";
import PostDetail from "./components/PostDetail/PostDetail.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post/add" element={<Newpost />} />
        <Route path="/post/:postId" element={<PostDetail />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
