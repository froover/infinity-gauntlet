import React from "react";
import thanos from "./images/thanos1.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Infinity Gauntlet</h1>
        <img src={thanos} alt="top" />
        <p>I am inevitable.</p>
      </header>
      <body />
    </div>
  );
}

export default App;
