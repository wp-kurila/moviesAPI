import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
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

container.render(
	<StrictMode>
		<Provider store={store}>
			<HashRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Initial />} />
						<Route path="details" element={<Details />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Route>
				</Routes>
			</HashRouter>
		</Provider>
	</StrictMode>
);
