import React from "react"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <h1>Akimenko Dmitry</h1>
        <nav>
            <ul>
                <li><Link>Portfolio</Link></li>
                <li><Link>Contact</Link></li>
                <li>Eng</li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;