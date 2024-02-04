import "./style.css";
import NavBar from "../Navbar/Navbar";
import Hero from "./Hero/Hero";
import Container from "./Container/Container";

const Dashboard = () => {
  return (
    <div className="container">
      <NavBar />
      <Hero className="hero" />
      <Container />
    </div>
  );
};

export default Dashboard;
