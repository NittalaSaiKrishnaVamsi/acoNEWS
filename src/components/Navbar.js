import React, { useState } from 'react';

function Navbar({ setSearchTerm, setCategory }) {
  const [searchInput, setSearchInput] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    setShowFilter(false); // Hide filter dropdown after selection
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* GIF instead of text */}
        <a className="navbar-brand" href="#" onClick={() => window.location.reload()}>
  <img src="/assets/download.gif" alt="acoNEWS" className="navbar-gif" />
</a>
        <form className="d-flex" onSubmit={handleSearch}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search News"
            aria-label="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
          {/* Filter Icon */}
          <button
            className="btn btn-outline-secondary ms-2"
            type="button"
            onClick={() => setShowFilter(!showFilter)}
          >
            <i className="fas fa-filter"></i>
          </button>
          {/* Filter Dropdown */}
          {showFilter && (
            <div className="filter-dropdown">
              <select
                className="form-select mt-2"
                onChange={handleCategoryChange}
              >
                <option value="">All Categories</option>
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </div>
          )}
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
