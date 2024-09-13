import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import favoritesReducer from './favoritesSlise';
import { omdbAPI } from '../api';

const store = configureStore({
	reducer: {
		search: searchReducer,
		favorites: favoritesReducer,
		[omdbAPI.movieApi.reducerPath]: omdbAPI.movieApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(omdbAPI.movieApi.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
