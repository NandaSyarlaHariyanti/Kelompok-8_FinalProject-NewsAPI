import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      navigate(`/search/${searchQuery}`);
    } else {
      alert('Please enter a search query');
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>
          <li>
            <Link to="/">Indonesia</Link>
          </li>
          <li>
            <Link to="/programming">Programming</Link>
          </li>
          <li>
            <Link to="/covid-19">COVID-19</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <input
          type="text"
          placeholder="Cari berita..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Cari</button>
      </div>
    </nav>
  );
}

export default Navbar;
