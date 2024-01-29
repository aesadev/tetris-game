import React, { useEffect, useState } from 'react';
import './gameboard.css';
import { TETROMINOS } from "./tetrominoes";

const createBoard = () => {
    return Array.from({ length: 20 }, () => Array(10).fill(0));
};

const getRandomTetromino = () => {
    const tetrominos = Object.keys(TETROMINOS);
    const randomTetromino = Math.floor(Math.random() * tetrominos.length);
    return TETROMINOS[tetrominos[randomTetromino]];
};

const GameBoard = () => {
    const [board, setBoard] = useState(createBoard());
    const [currentTetromino, setCurrentTetromino] = useState(getRandomTetromino());
    const [position, setPosition] = useState({ x: 5 - Math.floor(currentTetromino[0].length / 2), y: 0 });

    useEffect(() => {
        startTetromino();
    }, []);

    useEffect(() => {
        recreateBoard();
    }, [position, currentTetromino]);

    useEffect(() => {
        const interval = setInterval(() => {
            moveDown();
        }, 500); // Her 1000 milisaniyede (1 saniyede) bir moveDown çağrılır

        return () => clearInterval(interval); // Unmount olurken interval temizlenir
    }, []);

    const startTetromino = () => {
        const newTetromino = getRandomTetromino();
        setCurrentTetromino(newTetromino);
        setPosition({ x: 5 - Math.floor(newTetromino[0].length / 2), y: 0 });
    };

    const moveDown = () => {
        setPosition(prev => ({ ...prev, y: prev.y + 1 }));
    };

    const recreateBoard = () => {
        const newBoard = createBoard();
        currentTetromino.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    newBoard[y + position.y][x + position.x] = value;
                }
            });
        });
        setBoard(newBoard);
    };

    return <div className={"gameboard"}>
        {board.map((row, rowIndex) => (
            <div key={rowIndex} className={"row"}>
                {row.map((cell, cellIndex) => (
                    <div key={cellIndex} className={cell === 0 ? "empty" : "filled"}></div>
                ))}
            </div>
        ))}
    </div>;
};

export default GameBoard;
