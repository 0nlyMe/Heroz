import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components/Registeration/Registration";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import Newpost from "./components/Newpost/Newpost";

const App  = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post" element={<Newpost />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
