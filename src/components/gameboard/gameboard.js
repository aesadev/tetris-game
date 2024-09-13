import React, { useEffect } from 'react';
import './gameboard.css';
import { useTetrisGame } from '../../hooks/useTetrisGame';
import { TETROMINOS } from './tetrominoes';

const GameBoard = ({ setScore }) => {
	// Hook to manage the game state, such as board, current tetromino, and position
	const {
		board,
		currentTetromino,
		position,
		moveTetromino,
		rotateTetromino,
		moveTetrominoDown,
		gameOver,
	} = useTetrisGame(setScore);

	// Drawing the game board with tetrominos
	const drawBoard = () => {
		const displayBoard = board.map((row) => row.map((cell) => cell)); // Copy the board

		// Overlay the current falling tetromino onto the board
		currentTetromino.shape.forEach((row, y) => {
			row.forEach((value, x) => {
				if (
					value !== 0 &&
					displayBoard[y + position.y] &&
					displayBoard[y + position.y][x + position.x]
				) {
					displayBoard[y + position.y][x + position.x] = [
						currentTetromino.type,
						'clear',
					]; // Assign the tetromino's type and mark it as 'clear'
				}
			});
		});

		return displayBoard; // Return the complete display board with the tetromino overlaid
	};

	// Handle key press events for controlling the game
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (gameOver) return; // Disable controls if the game is over

			switch (event.keyCode) {
				case 37: // Left arrow
					moveTetromino(-1);
					break;
				case 39: // Right arrow
					moveTetromino(1);
					break;
				case 40: // Down arrow
					moveTetrominoDown();
					break;
				case 38: // Up arrow (rotate)
					rotateTetromino();
					break;
				default:
					break;
			}
		};

		// Attach event listener for keyboard inputs
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown); // Clean up the event listener
	}, [moveTetromino, rotateTetromino, moveTetrominoDown, gameOver]);

	return (
		<div className="game-board">
			{/* Render the board by mapping over the rows and cells */}
			{drawBoard().map((row, y) =>
				row.map((cell, x) => {
					const cellValue = cell[0]; // Get the cell value (tetromino type)
					const tetromino = TETROMINOS[cellValue]; // Get the tetromino details based on the type

					// Get the color of the tetromino, default to 'transparent' if not found
					const color = tetromino ? tetromino.color : 'transparent';

					return (
						<div
							key={`${x}-${y}`} // Unique key for each cell
							className="cell"
							style={{ backgroundColor: color }} // Apply the color
						></div>
					);
				})
			)}

			{/* Display 'Game Over' message if the game is over */}
			{gameOver && <div className="game-over">Game Over</div>}
		</div>
	);
};

export default GameBoard;
