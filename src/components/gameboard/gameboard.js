import React from 'react';
import './gameboard.css';

const GameBoard = () => {
    const boardWidth = 12;
    const boardHeight = 22;
    const totalCells = boardWidth * boardHeight;

    // Hücreleri oluşturmak için bir dizi yarat
    const cells = Array.from({ length: totalCells }, (_, index) => (
        <Cell
            key={index}
            edge={
                index < boardWidth ||
                index % boardWidth === 0 ||
                index % boardWidth === boardWidth - 1 ||
                index >= boardWidth * (boardHeight - 1)
            }
        />
    ));

    return <div className="game-board">{cells}</div>;
};

const Cell = ({edge}) => <div className={`cell ${edge ? 'edge-cell' : ''}`}></div>;

export default GameBoard;
