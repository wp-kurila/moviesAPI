import { FC, ReactElement, useCallback } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleOpen } from './store/favoritesSlise';
import Initial from './pages/Initial';
import Details from './pages/Details';
import Header from './components/Header';

import type IState from './Model';

import styles from './app.module.css';
import Favorites from './components/Favorites';
import { Drawer } from 'antd';

const Layout: FC = () => {
	const isOpen = useSelector((s: IState) => s.favorites.isOpen);

	const dispatch = useDispatch();

	const toClose = useCallback(() => {
		dispatch(handleOpen());
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

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Initial />,
			},
			{
				path: '/details',
				element: <Details />,
			},
		],
	},
]);

const App: FC = (): ReactElement => {
	return <RouterProvider router={router} />;
};

export default App;
