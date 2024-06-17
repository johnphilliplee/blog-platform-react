import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div>
        <h1>Homepage</h1>
        <p>This page will display a list of articles.</p>
        <Link to="/post-article"> Post an Article </Link>        
        </div>
    );
}

export default Homepage;