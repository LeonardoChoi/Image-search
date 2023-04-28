import React, { useState } from "react";
import "../index.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  // function that changes the state of term. Also prevents default action of form element
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  // passed down function
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Search for images of:</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
