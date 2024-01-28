import React, {useState} from 'react';
import './gameboard.css';

const createBoard = () => {
    return Array.from({length:20}, ()=> Array(10).fill(0));
}
const GameBoard = () => {
    const [board,setBoard] = useState(createBoard);

return <div className={"gameboard"}>
    {board.map((row,rowIndex) => (<div key={rowIndex} className={"row"}>
        {row.map((cell,cellIndex) => <div key={cellIndex} className={ cell === 0 ? "empty":"filled"}></div>)}
    </div>))}
</div>;
}

export default GameBoard;
