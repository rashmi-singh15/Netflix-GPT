// import { createSlice } from "@reduxjs/toolkit";

// const gptSlice = createSlice({
//     name: "gpt",
//     initialState: {
//         showGptSearch: false,
//     },
//     reducers: {
//         toggleGptSearchView: (state) => {
//             state.showGptSearch = !state.showGptSearch;
//         },
//     },
// });

// export const { toggleGptSearchView } = gptSlice.actions;

// export default gptSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",

  initialState: {
    showGptSearch: false,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    resetGptSearch: (state) => {
      state.showGptSearch = false;
    },
  },
});

export const {
  toggleGptSearchView,
  resetGptSearch,
} = gptSlice.actions;

export default gptSlice.reducer;