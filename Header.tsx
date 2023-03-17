import React from 'react';
import logo from "../logo.svg";

const Header: React.FC = () => {  //creates new functional component called Header
    return (
        <header>
            {
                <div className="header">
                    <p>
                        "MY 90s TO DO APP!!!"
                    </p>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1> Karina Soto </h1>
                </div>
            }
        </header>
    );
};

export default Header;
