import styles from "./cssModule/App.module.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./component/Sidebar";
import CreatePost from "./component/CreatePost";
import PostList from "./component/PostList";
import { useState } from "react";

function App() {

  let [selectedTab, setselectedTab] = useState();
  return (
    <div className={styles.appContainer}>
      <Sidebar selectedTab={selectedTab} />
      <div className={styles.content}>
        <Header />
        {selectedTab === "Home" ? <PostList /> : <CreatePost />
        }
        <Footer />
      </div>
    </div>
  );
}
export default App;
