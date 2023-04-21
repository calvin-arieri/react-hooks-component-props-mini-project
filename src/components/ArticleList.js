import React from "react";
import Article from "./Article";
import blogData from "../data/blog";

function ArticleList() {
    const post = blogData.posts
    //console.log(post)
    return(
        <main>
            {
                post.map(each =>
                    
                    {
                    return(<Article key={each.id} title={each.title} date={each.date} review = {each.preview} />)
                })
            }
        </main>
    )
}

export default ArticleList