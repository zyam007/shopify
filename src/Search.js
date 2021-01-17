import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { searchMovies } from './features/resultsSlice';

export default function Search() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    //dispatch axios request
    e.preventDefault(); //maybe don't need it
    dispatch(searchMovies(e.target.value));
  };

  return (
    <div className="search">
      {/* Image of Ibdd */}
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/889/889199.svg?token=exp=1610829786~hmac=ee85f8f12dc890f3ac16bd7540622712"
        alt=""
      />
      <div className="search__field">
        <SearchIcon />
        <form>
          <input
            onChange={(e) => handleSearch(e)}
            placeholder="Search"
            type="text"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
