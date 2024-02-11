import React from 'react';
import './Header.css';

function Header({  icon, title , form}) {
    return (
        <header className="header-outer-container">
            <div className="header-inner-container">

            <img src={icon} alt={title} />

            <h1>{title}</h1>

            </div>

        </header>
    );
}

export default Header;