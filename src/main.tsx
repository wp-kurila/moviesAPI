import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

import './index.css';
import 'antd/dist/reset.css';

const root = document.getElementById('root');

if (!root) throw new Error('root not found');

const container = createRoot(root);

container.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);
