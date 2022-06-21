import * as React from 'react';
import "./styles/App.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	
	return (
	
		<Routes>
			<Route path={'/'} element={<HomePage />} />
			<Route path={'/chats'} element={<ChatPage />} />
			<Route path={'/profile'} element={<ProfilePage />} />
			<Route path={'*'} element={<NotFoundPage/>} />
		</Routes>
		
	);
}

export default App;