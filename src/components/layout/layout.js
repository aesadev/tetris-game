import React from "react";
import "./welcome-screen.css";
import {findAllByDisplayValue} from "@testing-library/react";

const WelcomeScreen = ()=> {
  return (
  <div className="welcome-screen"  >
      <WelcomeScreenTable></WelcomeScreenTable>
  </div>
  )
}
export default WelcomeScreen;

const WelcomeScreenTable = ()=> {
    return (
        <div className="game-area">
            <div className="welcome-message">Welcome to the Tetris</div>
            <div className='buttons'>
                <button>play</button>
                <button>help</button>
            </div>
            <div className="high-scores">
                <h2>High Scores:</h2>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}
