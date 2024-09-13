// GameplayScreen.js
import React, { useState } from 'react';
import GameBoard from "../gameboard/gameboard";
import './gameplay-screen.css';

const GameplayScreen = ({ setActiveComponent }) => {
    const [score, setScore] = useState(0);

    return (
        <div className="gameplay-screen">
            <div className="game-container">
                <GameBoard setScore={setScore} />
            </div>
            <div className="sidebar">
                <div className="score">
                    Score: {score}
                </div>
                <button
                    className="quit-button"
                    onClick={() => setActiveComponent('WelcomeScreen')}
                >
                    Quit
                </button>
            </div>
        </div>
    );
};

export default GameplayScreen;
