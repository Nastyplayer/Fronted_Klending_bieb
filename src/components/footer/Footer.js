import React from 'react';
import './Footer.css';





function Footer( { description, children }) {
    return(
        <footer className="footer-outer-container">
            <article className="footer-inner-container">
                {/*<div className="footer-content-container">*/}
                    {/*<h4 className="footer-message">{message}</h4>*/}
                    <p className="footer-description">{description}</p>



                        {children}


                {/*</div>*/}
            </article>
        </footer>
    );
}


export default Footer;