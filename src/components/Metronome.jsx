import React, { Component } from "react";
import "./Metronome.css";
import click1 from "../sounds/click1.wav";

class Metronome extends Component {
  state = {
    bpm: 100,
    playing: false
  };

  constructor(props) {
    super(props);
    this.click1 = new Audio(click1);
  }

  onChangeBPM = e => {
    this.setState({ bpm: e.target.value });

    if (this.state.playing) {
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
    }
  };

  onStartClick = e => {
    e.preventDefault();

    if (this.state.playing) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
    }

    this.setState({ playing: !this.state.playing });
  };

  playClick = () => {
    this.click1.play();
  };

  render() {
    const { bpm } = this.state;
    return (
      <React.Fragment>
        <div className="main-window">
          <div className="metronome">
            <fieldset>
              <legend>Metronome</legend>
              <form>
                <div className="clearfloat">
                  <h4 className="bpm">{bpm} BPM</h4>
                  <button className="play" onClick={this.onStartClick}>
                    {this.state.playing ? "Stop" : "Start"}
                  </button>
                  {/* <input type="button" className="play" value="Play" /> */}
                </div>
                <div className="slider">
                  <div className="sign">-</div>
                  <input
                    type="range"
                    className="bpm-range"
                    value={bpm}
                    onChange={this.onChangeBPM}
                    min="40"
                    max="218"
                  />
                  <div className="sign">+</div>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Metronome;
