import { FC, ReactElement, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { omdbAPI } from '../../api';
import { getId } from '../../helpers';
import { Card, Rate } from 'antd';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { handleMovies } from '../../store/favoritesSlise';
import EmptyDetails from './EmptyDetails';

import styles from './details.module.css';
import type IState from '../../Model';

const Details: FC = (): ReactElement => {
	const dispatch = useDispatch();
	const location = useLocation();
	const movies = useSelector((s: IState) => s.favorites.movies);

	const movieId = getId(location.search);

	const { data, error, isLoading } = omdbAPI.useGetMovieByIdQuery(movieId);

	const handleFavorites = useCallback(() => {
		dispatch(handleMovies(data));
	}, [data, dispatch]);

	const isFavorite = useMemo(() => {
		return !!movies.find((movie) => movie.imdbID === movieId);
	}, [movies, movieId]);

	if (error) return <div>Something went wrong</div>;

	return (
		<Card>
			<div className={styles.page}>
				{isLoading ? (
					<EmptyDetails />
				) : (
					<>
						<div
							className={styles.poster}
							style={{ backgroundImage: `url(${data.Poster})` }}
						/>
						<div>
							<div className={styles.title}>{data.Title}</div>
							<div className={styles.desc}>
								<Rate allowHalf value={data.imdbRating / 2} disabled />
								<div>{data.Year}</div>
								<div>{data.Rated}</div>
								<div>{data.Runtime}</div>
							</div>
							<div className={styles.plot}>{data.Plot}</div>
						</div>
						<button className={styles.favoriteBtn} onClick={handleFavorites}>
							{isFavorite ? (
								<StarFilled className={styles.starFilled} />
							) : (
								<StarOutlined className={styles.star} />
							)}
						</button>
					</>
				)}
			</div>
		</Card>
	);
};

export default Details;
