import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { searchMovies } from './features/resultsSlice';

export default function Search() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleSearch = (e) => {
    e.preventDefault(); //maybe don't need it
    dispatch(searchMovies(e.target.value));
  };

  return (
    <div className="search">
      {/* Image of Ibdd */}
      <img src="https://container-ph-vd.s3.amazonaws.com/imdb.svg" alt="" />
      <div className="search__field">
        <SearchIcon />
        <form>
          <input
            onChange={(e) => handleSearch(e)}
            placeholder="Search"
            type="text"
          />
          <button onClick={handleSubmit} type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
