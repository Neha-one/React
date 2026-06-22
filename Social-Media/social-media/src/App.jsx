import styles from "./cssModule/App.module.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className={styles.appContainer}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Header className={styles.header} />
      </div>
      <div>
        <Footer className={styles.footer} />
      </div>
    </div>
  );
}
export default App;
