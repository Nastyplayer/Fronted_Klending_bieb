import React from 'react';
import './Header.css';

function Header({  icon, title }) {
    return (
        <header className="header-outer-container">
            <div className="header-inner-container">
                {/*<div className="header-content-container">*/}

           {/*<p> className="first-title"</p>*/}
            <img src={icon} alt={title} />
            <h1>{title}</h1>

                {/*</div>*/}
            </div>

        </header>
    );
}

export default Header;