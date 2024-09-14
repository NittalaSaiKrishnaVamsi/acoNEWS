import React, { useState, useEffect } from 'react';
import './App.css';
import NewsCard from './components/NewsCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import Footer

function App() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState(''); // Added state for category
  const [loading, setLoading] = useState(false);

  const API_KEY = 'be9f509d992d9065266cb022fd10aeed'; // Your gnews.io API key
  const BASE_URL = `https://gnews.io/api/v4/top-headlines?q=${searchTerm}&category=${category}&token=${API_KEY}&lang=en`;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      if (data && data.articles) {
        setArticles(data.articles);
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setArticles([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, [searchTerm, category]); // Added category to dependency array

  return (
    <div className="App">
      <Navbar setSearchTerm={setSearchTerm} setCategory={setCategory} /> {/* Passed setCategory */}
      <div className="container mt-4">
        <div className="row">
          {loading ? (
            <div className="col-12 text-center">Loading...</div>
          ) : (
            articles.length > 0 ? (
              articles.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))
            ) : (
              <div className="col-12 text-center">No articles found</div>
            )
          )}
        </div>
      </div>
      <Footer /> {/* Add Footer */}
    </div>
  );
}

export default App;
