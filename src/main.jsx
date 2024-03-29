import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<React.StrictMode>
			<BrowserRouter>
				<Routes>
					<Route index element={<App />} />
				</Routes>
			</BrowserRouter>
		</React.StrictMode>
	</React.StrictMode>
);
