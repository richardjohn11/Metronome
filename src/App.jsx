import React, { Component } from "react";
import Metronome from "./components/Metronome";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Metronome />
      </div>
    );
  }
}

export default App;
