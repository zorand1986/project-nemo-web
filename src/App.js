import Countdown from "./components/Countdown.page";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "SmartPets";
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
      className="App"
    >
      <Countdown />
    </div>
  );
}

export default App;
