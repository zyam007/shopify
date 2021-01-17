import { configureStore } from '@reduxjs/toolkit';
import resultsReducer from '../features/resultsSlice';

export default configureStore({
  reducer: {
    results: resultsReducer,
  },
});
