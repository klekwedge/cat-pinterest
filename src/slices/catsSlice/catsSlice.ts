/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CatsState } from './catsSlice.types';
import useHttp from '../../hooks/useHTTP';

const initialState: CatsState = {
  cats: [],
  favouriteCats: [],
  catsLoadingStatus: 'idle',
};

export const fetchCats = createAsyncThunk('cats/fetchCats', (page: number) => {
    const { request } = useHttp();
    return request(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&size=thumb`);
});

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setFavouriteCats: (state, action) => {
      state.cats = action.payload;
    },
    addCatToFavourite: (state, action) => {
      state.cats.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.catsLoadingStatus = 'loading';
      })
      .addCase(fetchCats.fulfilled, (state, action) => {
        state.catsLoadingStatus = 'idle';
        state.cats.push(...action.payload);
      })
      .addCase(fetchCats.rejected, (state) => {
        state.catsLoadingStatus = 'error';
      })
  },
});


const { actions, reducer } = catsSlice;
export const { setFavouriteCats, addCatToFavourite } = actions;
export default reducer;