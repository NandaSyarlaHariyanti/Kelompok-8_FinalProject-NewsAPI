import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { saveNews } from '../redux/actions/NewsActions';
import { Link } from 'react-router-dom';

const Indonesia = ({ saveNews }) => {
  const [indonesiaNews, setIndonesiaNews] = useState([]);

  useEffect(() => {
    const apiKey = '920ab4ea830f43589e17261d606a4677';
    const url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${apiKey}`;

    axios.get(url)
      .then(response => {
        setIndonesiaNews(response.data.articles);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="centered-content">
      <h1>News</h1>
      <div className="news-container">
        {indonesiaNews.map((article, index) => (
          <div className="news-item" key={index}>
            <p>{article.source.name}</p>
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <span className="button-box">News Page</span>
            </a>
            <button className="button" onClick={() => saveNews(article)}>
              Save
            </button>
          </div>
        ))}
        <Link to="/saved" className="button">
          Go to Saved
        </Link>
      </div>
    </div>
  );
};

export default connect(null, { saveNews })(Indonesia);
