import "./App.css";
import Home from "./Component/home";
import NavBar from "./Component/NavBar";

import TextDown from "./Component/TextDown";

function App() {
  return (
    <div className="Appp">
      <NavBar />
      <div className="App">
        <Home />
        <TextDown />
      </div>
    </div>
  );
}

export default App;
