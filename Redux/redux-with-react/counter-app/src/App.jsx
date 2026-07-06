import { useSelector } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Container from "./components/Container";
import Controllers from "./components/Controllers";
import Header from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivacyToggle from "./components/PrivayToggle";

function App() {

  const privacy = useSelector((store) => store.privacy);

  return (
    <div className="px-4 py-5 my-5 text-center">

      <Container>
        <Header />
        {/* {!privacy && (
          <div>
            <Body />, <Controllers /></div>)} */}
        {!privacy && <Body/>}
        {privacy && <PrivacyToggle />}
        <Controllers/>
      </Container>
    </div>
  );
}

export default App;
