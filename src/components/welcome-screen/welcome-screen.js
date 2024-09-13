// WelcomeScreen.js
import React from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ setActiveComponent }) => {
	return (
		<div className="welcome-screen">
			<h1>Welcome to Tetris</h1>
			<div className="buttons">
				<button onClick={() => setActiveComponent('GameplayScreen')}>Play</button>
				<button onClick={() => alert('Help information goes here.')}>Help</button>
			</div>
		</div>
	);
};

export default WelcomeScreen;
