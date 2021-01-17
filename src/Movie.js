import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './Movie.css';

function Movie({ poster, title, year, imdbID, handleDelete }) {
  const defaultImg =
    'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdyYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60';

  return (
    <div className="nominee">
      <div className="nominee__details">
        <img src={poster !== 'N/A' ? poster : defaultImg} alt={title} />
        <div className="movie__info">
          <p>{title}</p>
          <p>{year}</p>
        </div>
      </div>
      <DeleteIcon onClick={() => handleDelete(imdbID)} />
    </div>
  );
}

export default Movie;
