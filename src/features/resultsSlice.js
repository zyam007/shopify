import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    movies: [],
  },
  reducers: {
    search_results: (state, action) => {
      state.movies = [...action.payload];
    },
    no_results: (state) => {
      state.movies = [];
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  search_results,
  no_results,
} = resultsSlice.actions;

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const searchMovies = (title) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=&s=${title}&type=movie`
    );
    console.log(data);
    if (!data.Error) {
      dispatch(search_results(data.Search));
    } else {
      dispatch(no_results());
    }
  } catch (error) {
    console.log(error);
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectMovies = (state) => state.results.movies;

export default resultsSlice.reducer;
