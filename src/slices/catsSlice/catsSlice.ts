/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CatsState } from './catsSlice.types';
import useFetch from '../../hooks/useFetch';

const initialState: CatsState = {
  cats: [],
  favouriteCats: [],
  catsLoadingStatus: 'idle',
};

export const fetchCats = createAsyncThunk('cats/fetchCats', (page: number) => {
    const { request } = useFetch();
    return request(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&size=thumb`);
});

const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    setFavouriteCats: (state, action) => {
      state.favouriteCats = action.payload;
    },
    addCatToFavourite: (state, action) => {
      state.favouriteCats.push(action.payload);
    },
    removeCatFromFavourite: (state, action) => {
      state.favouriteCats = state.favouriteCats.filter(cat => cat.id !== action.payload.id);
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
export const { setFavouriteCats, addCatToFavourite, removeCatFromFavourite } = actions;
export default reducer;