import Gameboard from "../gameboard/gameboard";


const GameplayScreen = ({setActiveComponent,ComponentTypes}) => {

    return (
        <div className="game-container">
            <div className="Gameboard-container">
                <Gameboard></Gameboard>
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
