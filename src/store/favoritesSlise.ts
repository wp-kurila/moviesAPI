import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IFavorites, IShortDesc } from '../Model';

const initialState: IFavorites = {
	isOpen: false,
	movies: [],
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleOpen: (state) => {
			state.isOpen = !state.isOpen;
		},
		handleMovies: (state, action: PayloadAction<IShortDesc>) => {
			if (state.movies.find((movie) => movie.imdbID === action.payload.imdbID)) {
				state.movies = state.movies.filter(
					(movie) => movie.imdbID !== action.payload.imdbID
				);
			} else {
				state.movies = [...state.movies, action.payload];
			}
		},
	},
});

export const { toggleOpen, handleMovies } = favoritesSlice.actions;
export default favoritesSlice.reducer;
