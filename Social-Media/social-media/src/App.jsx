import styles from "./cssModule/App.module.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import { useState } from "react";
import PostListProvider from "./store/app-store";

function App() {

  let [selectedTab, setselectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className={styles.appContainer}>
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        <div className={styles.content}>
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />
          }
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
