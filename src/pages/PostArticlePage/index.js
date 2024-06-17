import React, { useRef } from 'react';
import "./index.css";

function PostArticlePage() {
    const titleRef = useRef();
    const contentRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const article = {
            title: titleRef.current.value,
            content: contentRef.current.value
        };

        console.log(article);
        e.target.reset();
    };

    return (
        <div className="post-article-container">
        <h1 className="post-article-title">Post Article Page</h1>
        <form onSubmit={handleSubmit} className="post-article-form">
            <input ref={titleRef} type="text" placeholder="Title" required />
            <textarea id="contentArea" ref={contentRef} placeholder="What are your thoughts?" required />
            <button type="submit">Post Article</button>
        </form>
        </div>
    )
}

export default PostArticlePage;