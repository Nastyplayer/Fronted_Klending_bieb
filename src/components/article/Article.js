import "./Article.css";
import React from "react";


function Article({title, message, children, stylingTitle, page3, stylingArticle}) {

    return(
            <main className="article-outer-container">
                <article className="article-inner-container">
                    {/*<h2>{title}</h2>*/}


                    {children}

                </article>
            </main>

    );
}

export default Article;