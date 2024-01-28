import "./style.css";
import NavBar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Container from "./Container/Container";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Container />
      <footer></footer>
    </div>
  );
};

export default Dashboard;
