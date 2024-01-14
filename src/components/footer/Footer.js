import React from 'react';
import './Footer.css';





function Footer( { description, children }) {
    return (
        <footer className="footer-class">
        <p className="footer">{description}</p>
            {children}
        </footer>
    );
}

export default Footer;