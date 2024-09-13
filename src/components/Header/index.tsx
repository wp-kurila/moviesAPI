import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleOpen } from '../../store/favoritesSlise';

import styles from './header.module.css';

const Header: FC = (): ReactElement => {
	const dispatch = useDispatch();

	const toOpenFavorites = () => {
		dispatch(handleOpen());
	};

	return (
		<header className={styles.header}>
			<Link to="/" className={styles.nav}>
				To the main page
			</Link>
			<button onClick={toOpenFavorites} className={styles.nav}>
				Favorites
			</button>
		</header>
	);
};

export default Header;
