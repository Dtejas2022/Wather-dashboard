import React, { useState } from 'react';
import '../WeatherDashboard.css'

const SearchComponent = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
      setInput(''); // Clear input after search
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter city name" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchComponent;
