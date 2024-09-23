export interface IShortDesc {
	Title: string;
	Year: string;
	imdbID: string;
	Type: string;
	Poster: string;
}

export interface IFavorites {
	isOpen: boolean;
	movies: IShortDesc[];
}
