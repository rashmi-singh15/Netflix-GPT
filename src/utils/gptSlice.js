import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",

  initialState: {
    showGptSearch: false,
    movieNames: null,
    movieResults: null,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    addGptMoviesResult: (state, action) => {
      state.movieNames = action.payload.moviesNames;
      state.movieResults = action.payload.moviesResult;
    },

    resetGptSearch: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
  },
});

export const {
  toggleGptSearchView,
  addGptMoviesResult,
  resetGptSearch,
} = gptSlice.actions;

export default gptSlice.reducer;