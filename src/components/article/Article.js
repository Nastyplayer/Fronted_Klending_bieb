import "./Article.css";
import React from "react";


function Article({children}) {

    return(
            <main className="article-outer-container">
                <article className="article-inner-container">


                    {children}

                </article>
            </main>

    );
}

export default Article;