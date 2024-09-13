// utils/gameUtils.js
import {TETROMINOS} from "../components/gameboard/tetrominoes";

/**
 * Creates an empty board with given width and height
 */
export const createBoard = (width, height) =>
	Array.from(Array(height), () => Array(width).fill([0, 'clear']));

/**
 * Checks for collision of the tetromino on the board
 */
export const checkCollision = (board, tetromino, position) => {
	for (let y = 0; y < tetromino.shape.length; y++) {
		for (let x = 0; x < tetromino.shape[y].length; x++) {
			// Check if the tetromino part exists
			if (tetromino.shape[y][x] !== 0) {
				if (
					// Check if we're outside the game board's height (bottom)
					!board[y + position.y] ||
					// Check if we're outside the game board's width (left or right)
					!board[y + position.y][x + position.x] ||
					// Check if the board cell is not clear (already occupied)
					board[y + position.y][x + position.x][1] !== 'clear'
				) {
					return true; // Collision detected
				}
			}
		}
	}
	return false; // No collision
};

/**
 * Merges the current tetromino into the board
 */
export const mergeTetrominoToBoard = (tetromino, position, board) => {
	const newBoard = board.map((row) => row.map((cell) => [...cell])); // Create a copy of the board

	tetromino.shape.forEach((row, y) => {
		row.forEach((value, x) => {
			if (value !== 0) {
				// Ensure that we're only modifying the cells where the tetromino is
				if (newBoard[y + position.y] && newBoard[y + position.y][x + position.x]) {
					newBoard[y + position.y][x + position.x] = [tetromino.type, 'merged'];
				}
			}
		});
	});

	return newBoard;  // Return the board with the merged tetromino
};



/**
 * Clears full rows and returns updated board along with the number of rows cleared
 */
export const clearFullRows = (board, width) => {
	let rowsCleared = 0;
	const newBoard = board.reduce((accumulator, row) => {
		if (row.every((cell) => cell[0] !== 0)) {
			rowsCleared += 1;
			// Add a new empty row at the top of the board
			accumulator.unshift(Array(width).fill([0, 'clear']));
		} else {
			accumulator.push(row);
		}
		return accumulator;
	}, []);

	return [newBoard, rowsCleared];
};

export const randomTetromino = () => {
	const tetrominoTypes = [1, 2, 3, 4, 5, 6, 7];
	const randIndex = Math.floor(Math.random() * tetrominoTypes.length);
	const randTetromino = TETROMINOS[tetrominoTypes[randIndex]];

	if (!randTetromino) {
		console.error(
			'Generated undefined tetromino for type:',
			tetrominoTypes[randIndex]
		);
	} else {
		console.log('Random tetromino generated:', randTetromino);
	}

	return randTetromino;
};

