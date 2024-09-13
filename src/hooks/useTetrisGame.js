import { useState, useEffect } from 'react';
import {
	checkCollision,
	clearFullRows,
	createBoard,
	mergeTetrominoToBoard,
	randomTetromino
} from "../utilities/game-utilities";

const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

export const useTetrisGame = (setScore) => {
	const [board, setBoard] = useState(createBoard(BOARD_WIDTH, BOARD_HEIGHT));
	const [currentTetromino, setCurrentTetromino] = useState(randomTetromino());
	const [position, setPosition] = useState({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 });
	const [gameOver, setGameOver] = useState(false);

	useEffect(() => {
		if (gameOver) return;

		const interval = setInterval(() => {
			moveTetrominoDown();
		}, 1000);

		return () => clearInterval(interval);
	}, [position, currentTetromino, gameOver]);

	const moveTetrominoDown = () => {
		const newPosition = { x: position.x, y: position.y + 1 };

		if (!checkCollision(board, currentTetromino, newPosition)) {
			setPosition(newPosition);
		} else {
			lockTetromino();
		}
	};

	const lockTetromino = () => {
		setBoard(prevBoard => mergeTetrominoToBoard(currentTetromino, position, prevBoard));
		if (position.y <= 0) {
			setGameOver(true);
		} else {
			setBoard(prevBoard => {
				const [newBoard, rowsCleared] = clearFullRows(prevBoard, BOARD_WIDTH);
				setScore(prevScore => prevScore + rowsCleared * 100);
				return newBoard;
			});
			resetTetromino();
		}
	};

	const moveTetromino = (dir) => {
		const newPosition = { x: position.x + dir, y: position.y };
		if (!checkCollision(board, currentTetromino, newPosition)) {
			setPosition(newPosition);
		}
	};

	const rotateTetromino = () => {
		const rotatedShape = currentTetromino.shape[0].map((_, index) =>
			currentTetromino.shape.map((row) => row[index]).reverse()
		);
		const rotatedTetromino = { ...currentTetromino, shape: rotatedShape };
		if (!checkCollision(board, rotatedTetromino, position)) {
			setCurrentTetromino(rotatedTetromino);
		}
	};

	const resetTetromino = () => {
		setCurrentTetromino(randomTetromino());
		setPosition({ x: Math.floor(BOARD_WIDTH / 2) - 1, y: 0 });
	};

	return { board, currentTetromino, position, moveTetromino, rotateTetromino, moveTetrominoDown, gameOver };
};
