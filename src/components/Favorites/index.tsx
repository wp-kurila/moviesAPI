import { FC, ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IState, { IShortDesc } from '../../Model';
import Block from '../Block';

import styles from './favorites.module.css';
import { CloseCircleFilled } from '@ant-design/icons';
import { handleMovies } from '../../store/favoritesSlise';

const Favorites: FC = (): ReactElement | null => {
	const dispatch = useDispatch();
	const movies = useSelector((s: IState) => s.favorites.movies);

	const handleFavorites = useCallback(
		(data: IShortDesc) => {
			dispatch(handleMovies(data));
		},
		[dispatch]
	);

	return (
		<div className={styles.favorites}>
			{movies.map((movie) => (
				<div className={styles.movie} key={movie.imdbID}>
					<Block {...movie} small />
					<CloseCircleFilled
						className={styles.closeBtn}
						onClick={() => handleFavorites(movie)}
					/>
				</div>
			))}
		</div>
	);
};

export default Favorites;
