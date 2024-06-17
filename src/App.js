import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ArticlePage from './pages/ArticlePage';
import PostArticlePage from './pages/PostArticlePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/post-article" element={<PostArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
