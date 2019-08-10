import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorBoxes from "./components/ColorBoxes";

function App() {
  return (
    <div className="App mx-auto px-5 w-full">
      <h1 className="text-4xl mt-2 font-bold font-sans">Color Boxes</h1>
      <ColorBoxes />
    </div>
  );
}

export default App;
