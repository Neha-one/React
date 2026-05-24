<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./cssModule/App.module.css"
import ContainerList from "./components/ContainerItem";
import AppName from './components/AppName';
import CourseInput from './components/CourseInput';

function App() {

  const ItemList = ['B.Tech', 'B.Com', 'MBA', 'BCA', 'BPharma', 'PHD']

  return (
    <div className={styles.Container}>
      <AppName></AppName>
      <CourseInput></CourseInput>
      <ContainerList ItemList={ItemList}></ContainerList>
    </div>
  )
}
export default App;
