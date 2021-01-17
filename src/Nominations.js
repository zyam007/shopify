import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove_nominee, selectNominees } from './features/resultsSlice';
import './Nominations.css';
import Movie from './Movie';

export default function Nominations() {
  const dispatch = useDispatch();
  const nominated = useSelector(selectNominees);

  const handleDelete = (id) => {
    dispatch(remove_nominee(id));
  };

  return (
    <div className="nominations">
      <h2>Your Nominations</h2>
      {nominated.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          imdbID={movie.imdbID}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
