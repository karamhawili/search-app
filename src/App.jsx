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
      <h1>Article Search</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Search articles..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <p className="results-count">
          {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "result" : "results"}
        </p>
      </div>
      <div className="articles">
        {filteredArticles.length === 0 && <p>No articles found.</p>}
        {filteredArticles.map((article) => (
          <div key={article.id} className="article">
            <h2 className="title">{highlightText(article.title, query)}</h2>
            <p className="date">
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
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
