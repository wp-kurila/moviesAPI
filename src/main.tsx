import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Initial from './pages/Initial';
import Details from './pages/Details';
import store from './store/store';

import './index.css';
import 'antd/dist/reset.css';

const root = document.getElementById('root');

if (!root) throw new Error('root not found');

const container = createRoot(root);

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
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
	{
		path: '*',
		element: <Navigate to="/" />,
	},
]);

container.render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
