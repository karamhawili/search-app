import { useState } from "react";
import "./App.css";

const articles = [
  {
    id: 1,
    title: "Understanding React Hooks",
    date: "2024-06-01",
    content:
      "React Hooks are functions that let you use state and other React features without writing a class. They were introduced in React 16.8 and have become a fundamental part of modern React development. Hooks allow you to reuse stateful logic across components, making your code more modular and easier to maintain.",
  },
  {
    id: 2,
    title: "A Guide to JavaScript Promises",
    date: "2024-06-02",
    content:
      "JavaScript Promises are a way to handle asynchronous operations. They represent a value that may be available now, in the future, or never. Promises have three states: pending, fulfilled, and rejected. They provide a cleaner and more manageable way to work with asynchronous code compared to traditional callback functions.",
  },
  {
    id: 3,
    title: "CSS Grid Layout: A Comprehensive Guide",
    date: "2024-06-03",
    content:
      "CSS Grid Layout is a powerful layout system in CSS that allows you to create complex and responsive web designs easily. It provides a two-dimensional grid-based layout system, enabling you to design web pages without having to use floats or positioning. With CSS Grid, you can define rows and columns, and place items into the grid with precision.",
  },
];

function highlightText(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <mark key={index} className="highlight">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

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
