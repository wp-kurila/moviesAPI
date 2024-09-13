import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = '77c90bd8';

export const movieApi = createApi({
	reducerPath: 'movieApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
	endpoints: (builder) => ({
		searchMovies: builder.query({
			query: (searchTerm: string) => `?s=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`,
		}),
		getMovieById: builder.query({
			query: (id: string) => `?i=${id}&apikey=${API_KEY}&plot=full`,
		}),
	}),
});

export const { useSearchMoviesQuery, useGetMovieByIdQuery } = movieApi;
