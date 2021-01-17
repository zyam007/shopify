import React from 'react';
import './Movie.css';

function Movie({ Title, Year, Poster }) {
  return (
    <div className="movie">
      <p>{Title}</p>
      <p>{Year}</p>
    </div>
  );
}

export default Movie;
