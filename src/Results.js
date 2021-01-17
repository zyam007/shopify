import React, { useEffect, useState } from 'react';
import './Results.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  add_nominee,
  selectMovies,
  selectNominees,
} from './features/resultsSlice';
import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
//import Movie from './Movie';

export default function Results() {
  const defaultImg =
    'https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdyYXl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60';
  const dispatch = useDispatch();
  const [notify, setNotify] = useState(false);
  const [maxLimit, setMaxLimit] = useState(false);
  const movies = useSelector(selectMovies);
  const nominated = useSelector(selectNominees);

  useEffect(() => {
    if (nominated.length >= 5) {
      setMaxLimit(true);
    } else setMaxLimit(false);
  }, [nominated]);

  const addNominee = (movie) => {
    if (nominated.filter((item) => item.imdbID === movie.imdbID).length) {
      //already nominated
      alert('already nominated');
    } else {
      dispatch(add_nominee(movie));
      if (nominated.length === 4) setNotify(true);
    }
  };

  const handleClose = () => {
    setNotify(false);
  };

  return (
    <div className="results">
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={notify}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success">
          Your nominations are complete!
        </Alert>
      </Snackbar>
      <h2>Your Results</h2>
      <GridList cellHeight={250} className="grid__list">
        {movies.map((movie) => (
          <GridListTile key={movie.imdbID} className="grid__item">
            <img
              src={movie.Poster !== 'N/A' ? movie.Poster : defaultImg}
              alt={movie.Title}
              className="poster"
            />
            <GridListTileBar
              title={movie.Title}
              subtitle={<span>Released: {movie.Year}</span>}
              actionIcon={
                <IconButton
                  disabled={
                    maxLimit
                      ? true
                      : nominated.filter((item) => item.imdbID === movie.imdbID)
                          .length
                      ? true
                      : false
                  }
                  onClick={() => addNominee(movie)}
                  aria-label={`info about ${movie.Title}`}
                  className="add_button"
                >
                  <AddCircleOutlineIcon
                    className={
                      'add__icon' +
                      (maxLimit
                        ? 'disable'
                        : nominated.filter(
                            (item) => item.imdbID === movie.imdbID
                          ).length
                        ? 'disable'
                        : '')
                    }
                  />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
