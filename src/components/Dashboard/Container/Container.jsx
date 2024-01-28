import "./Container.css";
import Categories from "./Categories/Categories";
import Post from "./Posts/Post";
import Users from "./Users/Users";

const Container = () => {
  return (
    <main className="main-container">
      <Categories />
      <Post />
      <Users />
    </main>
  );
};

export default Container;
