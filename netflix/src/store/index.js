import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//createAsyncThunk to define the asynchronous action for fetching movie genres and createSlice to define a Redux slice for managing the state of Netflix movies and genres
import axios from "axios";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};
// This is the initial state of your Redux store. It defines the structure of your application's 

export const getGenres = createAsyncThunk("netflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=5a405772cad8d0a1bcdf3b5e6e961069"
  );
  return genres;
});

const NetflixSlice = createSlice({
  name: "Netflix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    
  },
});

export const { reducer } = NetflixSlice;


export const store = configureStore({
  reducer: {
    netflix: reducer,
  },
});
