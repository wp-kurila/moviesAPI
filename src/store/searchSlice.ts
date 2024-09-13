import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		handleSearch: (_, action: PayloadAction<string>) => action.payload,
	},
});

export const { handleSearch } = searchSlice.actions;
export default searchSlice.reducer;
