import React from "react";

function Navbar()
{
    return(
        <nav>
        <img src="./images/logo.png" className="nav--icon" />
        <h3 className="nav--logo_text">ReactFacts</h3>
        <ul className="nav-ul">
            <li className="nav-li">Home</li>
            <li className="nav-li">Services</li>
        </ul>
        <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}

export default Navbar;