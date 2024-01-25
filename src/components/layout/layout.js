import React, {useState,} from "react";
import "./layout.css";
import GameplayScreen from "../gameplay-screen/gameplay-screen";

const ComponentTypes = {
    WelcomeScreenTable: 'WelcomeScreenTable',
    GameplayScreen: 'GameplayScreen'
}
const Layout = ()=> {
    const [activeComponent, setActiveComponent] = useState(ComponentTypes.WelcomeScreenTable);

    switch (activeComponent) {
        case ComponentTypes.WelcomeScreenTable:
            return <WelcomeScreenTable setActiveComponent={setActiveComponent}/>;
        case ComponentTypes.GameplayScreen:
            return <GameplayScreen setActiveComponent={setActiveComponent} ComponentTypes={ComponentTypes}/>;
        default:
            return <WelcomeScreenTable setActiveComponent={setActiveComponent}/>;

    }
}
export default Layout;

const WelcomeScreenTable = ({setActiveComponent})=> {

    return (
        <div className="game-area">
            <div className="welcome-message">Welcome to the Tetris</div>
            <div className='buttons'>
                <button onClick={() => setActiveComponent(ComponentTypes.GameplayScreen)}>play</button>
                <button>help</button>
            </div>
            <div className="high-scores">
                <h2>High Scores:</h2>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}
