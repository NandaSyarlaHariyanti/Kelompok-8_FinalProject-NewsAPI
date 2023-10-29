import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { keyword } = useParams();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${keyword}&apiKey=920ab4ea830f43589e17261d606a4677`
        );
        const data = await response.json();

        if (data.status === "ok") {
          setSearchResults(data.articles);
        } else {
          console.error("News API response status is not ok.");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, [keyword]);

  return (
    <div className="centered-content">
      <h1>Search Results for "{keyword}"</h1>
      <div className="news-container">
        {searchResults.length === 0 ? (
          <p>No results found for "{keyword}".</p>
        ) : (
          searchResults.map((article, index) => (
            <div className="news-item" key={index}>
              <p>{article.source.name}</p>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <span className="button-box">News Page</span>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
