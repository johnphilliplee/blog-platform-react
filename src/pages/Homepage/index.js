import React from "react";
import { Link } from "react-router-dom";
import { useArticles } from "../../context/ArticleContext";

function Homepage() {
    const { articles } = useArticles();
    
    return (
        <div>
        <h1>Homepage</h1>
        <h2>Articles</h2>
        <ul>
            {articles.map((article, index) => (
            <li key={index}>{article.title}</li> // Assuming articles have a title property
            ))}
        </ul>
        <Link to="/post-article"> Post an Article </Link>        
        </div>
    );
}

export default Homepage;