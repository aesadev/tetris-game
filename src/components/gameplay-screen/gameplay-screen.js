import Gameboard from "../gameboard/gameboard";


const GameplayScreen = ({setActiveComponent,ComponentTypes,setBoard,setCurrentTetromino,setPosition}) => {

    return (
        <div className="game-container">
            <div className="Gameboard-container">
                <Gameboard setBoard={setBoard} setCurrentTetromino={setCurrentTetromino} setPosition={setPosition}></Gameboard>
            </div>
            <div className="sidebar">
                <div className="score">
                    Score: {/* Score value here */}
                </div>
                <button className="quit-button"
                        onClick={() => setActiveComponent(ComponentTypes.WelcomeScreenTable)}>Quit
                </button>
            </div>
        </div>
    )
};

export default GameplayScreen;
