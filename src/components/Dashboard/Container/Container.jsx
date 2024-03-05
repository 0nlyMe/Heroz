import "../../../Styles/Container.css";
import Categories from "./Categories";
import Post from "./Post";
import Users from "./Users";

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
