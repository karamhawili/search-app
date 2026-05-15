import { useState } from "react";
import "./App.css";
import articles from "./lib/articles";
import highlightText from "./utils/highlight";

function App() {
  const [query, setQuery] = useState("");

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="main">
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search articles..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="articles">
        {filteredArticles.length === 0 && <p>No articles found.</p>}
        {filteredArticles.map((article) => (
          <div key={article.id} className="article">
            <h2 className="title">{highlightText(article.title, query)}</h2>
            <p className="date">{article.date}</p>
            <p className="description">
              {highlightText(article.content, query)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
