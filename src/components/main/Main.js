import React from 'react';
import './Main.css';

function Main({ children }) {
    return (
        <main className="outer-container">
            <article className="inner-container">
                <div className="content-container">
                     {/*// page2={page2}>*/}
                    {children}

                </div>
            </article>
        </main>
    )
}

export default Main;