import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/Container";
import styles from "./cssModule/App.module.css";
function App() {
  return (
    <>
      <Container>
        <h1>Healthy Foods</h1>
        <ul className="list-group">
          <li className="list-group-item">Dal</li>
          <li className="list-group-item">Oats</li>
          <li className="list-group-item">Curd</li>
          <li className="list-group-item">Rice</li>
          <li className="list-group-item">vegetables</li>
        </ul>
      </Container>
      <Container><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eligendi animi placeat.</p></Container>
    </>
  );

}
export default App;