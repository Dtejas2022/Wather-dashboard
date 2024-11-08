import React from 'react';
import '../WeatherDashboard.css'
const FavoriteComponent = ({ favorites, onSelect, onAdd, onRemove }) => {
  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map(fav => (
          <li key={fav.id}>
            <span onClick={() => onSelect(fav.name)}>{fav.name}</span>
            <button onClick={() => onRemove(fav.name)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={onAdd}>Add to Favorites</button>
    </div>
  );
};

export default FavoriteComponent;
