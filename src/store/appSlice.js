import { createSlice } from "@reduxjs/toolkit";
import { genreData } from "../genre/genreData";

const appSlice = createSlice({
  name: "app",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")),
    genre: JSON.parse(localStorage.getItem("genre")) || genreData,
  },
  reducers: {
    setUserRedux: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
      localStorage.setItem("genre", JSON.stringify(state.genre));
    },
  },
});

export const { setUserRedux, setGenre } = appSlice.actions;

export default appSlice.reducer;
