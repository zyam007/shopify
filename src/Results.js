import React from 'react';
import './Results.css';
import { useSelector } from 'react-redux';
import { selectMovies } from './features/resultsSlice';
import Movie from './Movie';

export default function Results() {
  const movies = useSelector(selectMovies);

  return (
    <div className="results">
      <h2>Your Results</h2>
      {movies.map(({ Title, Year, Poster, imdbID }) => (
        <Movie Title={Title} Year={Year} Poster={Poster} key={imdbID} />
      ))}
    </div>
  );
}
