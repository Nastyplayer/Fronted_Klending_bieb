import "./Article.css";
import React from "react";


function Article({title, message, children, stylingTitle, page3, stylingArticle}) {

    return(
            <main className="article-outer-container">
                <article className="article-inner-container">
                   {/*<div className="page3" >*/}


                    {children}
                   {/*</div>*/}
                </article>
            </main>

    );
}

export default Article;