// Layout.js
import React, { useState } from 'react';
import './layout.css';
import GameplayScreen from "../gameplay-screen/gameplay-screen";
import WelcomeScreen from "../welcome-screen/welcome-screen"; // Import your layout-specific CSS

const Layout = () => {
    const [activeComponent, setActiveComponent] = useState('WelcomeScreen');

    return (
        <div className="layout">
            {activeComponent === 'WelcomeScreen' && (
                <WelcomeScreen setActiveComponent={setActiveComponent} />
            )}
            {activeComponent === 'GameplayScreen' && (
                <GameplayScreen setActiveComponent={setActiveComponent} />
            )}
        </div>
    );
};

export default Layout;
