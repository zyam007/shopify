import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    movies: [],
    nominees: [],
  },
  reducers: {
    add_nominee: (state, action) => {
      state.nominees = [...state.nominees, action.payload];
    },
    remove_nominee: (state, action) => {
      state.nominees = state.nominees.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
    search_results: (state, action) => {
      state.movies = [...action.payload];
    },
    no_results: (state) => {
      state.movies = [];
    },
  },
});

export const {
  search_results,
  no_results,
  add_nominee,
  remove_nominee,
} = resultsSlice.actions;

export const searchMovies = (title) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=883038a1&s=${title}&type=movie`
    );
    if (!data.Error) {
      dispatch(search_results(data.Search));
    } else {
      dispatch(no_results());
    }
  } catch (error) {
    console.log(error);
  }
};

export const selectMovies = (state) => state.results.movies;
export const selectNominees = (state) => state.results.nominees;

export default resultsSlice.reducer;
