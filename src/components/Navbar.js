import React from "react";
import logo from '../logo.svg';

function Navbar(){
    return (
        <nav>
            <img src={logo} width="100" alt="react logo" className="nav--icon"/>
            <h3 className="nav--title">ReactFacts</h3>
            <h4 className="nav--sub--title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar