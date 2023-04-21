import React from "react";
import useState from "react";
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit("cars");
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div>
      <input value={term} onChange={handleChange} />
    </div>
  );
}

export default SearchBar;
