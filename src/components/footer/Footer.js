import React from 'react';
import './Footer.css';





function Footer( { description, children }) {
    return(
        <footer className="footer-outer-container">
            <article className="footer-inner-container">

                    <p className="footer-description">{description}</p>


                        {children}


            </article>
        </footer>
    );
}


export default Footer;