/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import useHttp from '../../hooks/http.hook';

const initialState = {
  cats: [],
  catsLoadingStatus: 'idle',
};

export const fetchCats = createAsyncThunk('cats/fetchCats', (url: string) => {
//   const { request } = useHttp();
//   return request(url);
});

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    resetGames: (state) => {
      state.cats = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.catsLoadingStatus = 'loading';
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.catsLoadingStatus = 'idle';
        state.cats.push(...action.payload.results);
      })
      .addCase(fetchCats.rejected, (state) => {
        state.catsLoadingStatus = 'error';
      })
      .addDefaultCase(() => { });
  },
});


const { actions, reducer } = catsSlice;
export const { resetGames } = actions;
export default reducer;