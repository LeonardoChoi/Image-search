import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
