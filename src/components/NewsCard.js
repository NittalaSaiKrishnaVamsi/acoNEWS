import React from 'react';
import './NewsCard.css'; // Optional: If you want to use a separate CSS file for styling

function NewsCard({ article }) {
  return (
    <div className="card">
      <img src={article.image} className="card-img" alt={article.title} />
      <div className="card-overlay">
        <div className="card-body-overlay">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.description}</p>
          <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
