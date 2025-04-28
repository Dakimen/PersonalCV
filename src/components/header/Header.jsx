import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {

    return (
        <header className="header-bar">
        <h1>Akimenko Dmitry</h1>
        <nav>
            <ul>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="mailto:dakimenko@yahoo.com">Contacter</a></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;