import React, { useEffect, useState } from 'react';
import './gameboard.css';
import { TETROMINOS, TETROMINO_COLORS } from "./tetrominoes";

const createBoard = () => {
    // Oyun tahtasını oluştur, her hücreyi (0, 'clear') ile doldurarak.
    // 'clear' alanı, bir tetrominonun sabitlenip sabitlenmediğini kontrol etmek için kullanılacak.
    return Array.from({ length: 20 }, () => Array(10).fill([0, 'clear']));
};

const getRandomTetromino = () => {
    const tetrominos = Object.keys(TETROMINOS);
    const randomTetromino = Math.floor(Math.random() * tetrominos.length);
    return {
        ...TETROMINOS[tetrominos[randomTetromino]],
        position: { x: 5 - Math.floor(TETROMINOS[tetrominos[randomTetromino]].shape[0].length / 2), y: 0 },
        collided: false,
    };
};

const checkCollision = (tetromino, newPos, board) => {
    for (let y = 0; y < tetromino.shape.length; y += 1) {
        for (let x = 0; x < tetromino.shape[y].length; x += 1) {
            // Tetrominonun bir kısmını kontrol et.
            if (tetromino.shape[y][x] !== 0) {
                if (
                    // Oyun tahtasının sınırlarını kontrol et.
                    !board[y + newPos.y] ||
                    !board[y + newPos.y][x + newPos.x] ||
                    // Çarpışma kontrolü yap.
                    board[y + newPos.y][x + newPos.x][1] !== 'clear'
                ) {
                    return true;
                }
            }
        }
    }
    return false;
};

// GameBoard bileşeni
const GameBoard = () => {
    const [board, setBoard] = useState(createBoard());
    const [currentTetromino, setCurrentTetromino] = useState(getRandomTetromino());

    useEffect(() => {
        const interval = setInterval(() => {
            moveDown();
        }, 1000); // Tetrominoyu her 1 saniyede bir aşağı taşı.
        return () => clearInterval(interval);
    }, [currentTetromino]);

    const moveDown = () => {
        if (!checkCollision(currentTetromino, { x: 0, y: 1 }, board)) {
            updateTetrominoPos({ x: 0, y: 1, collided: false });
        } else {
            // Eğer çarpışma varsa, yeni bir tetromino başlat.
            if (currentTetromino.position.y < 1) {
                console.error("Game Over");
                // Oyunu sıfırla.
                setBoard(createBoard());
                return;
            }
            updateTetrominoPos({ x: 0, y: 0, collided: true });
            setCurrentTetromino(getRandomTetromino());
        }
    };

    const updateTetrominoPos = ({ x, y, collided }) => {
        setCurrentTetromino(prev => ({
            ...prev,
            position: { x: (prev.position.x + x), y: (prev.position.y + y) },
            collided,
        }));
    };

    const sweepRows = newBoard =>
        newBoard.reduce((ack, row) => {
            if (row.findIndex(cell => cell[0] === 0) === -1) {
                ack.unshift(new Array(newBoard[0].length).fill([0, 'clear']));
                return ack;
            }
            ack.push(row);
            return ack;
        }, []);

    const updateBoard = (prevBoard) => {
        // Önce tahtayı temizle.
        const newBoard = prevBoard.map(row =>
            row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
        );

        // Tetrominoyu tahtaya yerleştir.
        currentTetromino.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    newBoard[y + currentTetromino.position.y][x + currentTetromino.position.x] = [
                        value,
                        `${currentTetromino.collided ? 'merged' : 'clear'}`,
                    ];
                }
            });
        });

        // Eğer tetromino çarpıştıysa, satırları temizle.
        if (currentTetromino.collided) {
            return sweepRows(newBoard);
        }

        return newBoard;
    };

    useEffect(() => {
        setBoard(prev => updateBoard(prev));
    }, [currentTetromino]);

    return (
        <div className="gameboard">
            {board.map((row, y) => (
                <div key={y} className="row">
                    {row.map((cell, x) => (
                        <div
                            key={x}
                            className={`cell ${cell[1]}`}
                            style={{
                                backgroundColor: cell[0] !== 0 ? TETROMINO_COLORS[cell[0]] : 'transparent',
                            }}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameBoard;
