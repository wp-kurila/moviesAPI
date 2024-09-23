import { FC, ReactElement, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleOpen } from './store/favoritesSlise';
import Header from './components/Header';
import { Drawer } from 'antd';

import type { RootState } from './store/store';

import styles from './app.module.css';
import Favorites from './components/Favorites';

const App: FC = (): ReactElement => {
	const isOpen = useSelector((s: RootState) => s.favorites.isOpen);

	const dispatch = useDispatch();

	const toClose = useCallback(() => {
		dispatch(toggleOpen());
	}, [dispatch]);

	return (
		<div className={styles.app}>
			<Header />
			<Outlet />
			<Drawer placement="right" open={isOpen} onClose={toClose}>
				<Favorites />
			</Drawer>
		</div>
	);
};

export default App;
