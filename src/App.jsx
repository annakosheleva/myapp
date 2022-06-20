import * as React from 'react';
import "./styles/App.css";
import MessageList from './components/MessageList';
import MessageForm from "./components/MessageForm";
import ChatList from "./components/ChatList"
import { teal } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useState } from 'react';

const theme = createTheme({
	palette: {
		primary: {
			main: teal[700]
		},
	},
});

function App() {
	const [messages, setMessages] = useState([
		{ id: 1, author: 'Ann', text: 'Hello)' },
		{ id: 2, author: 'Mark', text: 'Morning' },
		{ id: 3, author: 'Kris', text: 'Hi, all..' },
	])

	const createMessage = (newMessage) => {
		setMessages([...messages, newMessage])
	}

	const removeMessage = (message) => {
		setMessages(messages.filter(m => m.id !== message.id))
	}
	
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
			<ChatList />
			<div>
				<MessageForm create={createMessage} />
				{messages.length !== 0
				?
				<MessageList remove={removeMessage} messages={messages} title='Messages' />
				:
				<h1 style={{ textAlign: 'center' }}>No messages</h1>
				}
			</div>
		</div>
		</ThemeProvider>
	);
}

export default App;
