import * as React from 'react';
import "../styles/App.css";
import { Routes, Route } from 'react-router-dom';
import Chats from '../pages/Chats';
import Messages from '../pages/Messages';
import NotFoundPage from '../pages/NotFoundPage'
import Posts from '../pages/Posts';

function App() {
	
	return (
	
		<Routes>
			<Route path={'/chats'} element={<Chats />} />
			<Route path={'/messages/:id'} element={<Messages />} />
			<Route path={'/'} element={<Posts/>} />
			<Route path={'*'} element={<NotFoundPage/>} />
		</Routes>
		
	);
}

export default App;