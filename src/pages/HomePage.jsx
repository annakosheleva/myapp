import * as React from 'react';
import "../styles/App.css";
import MessageList from '../components/MessageList';
import MessageForm from "../components/MessageForm";
import { teal } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const theme = createTheme({
	palette: {
		primary: {
			main: teal[700]
		},
	},
});

const HomePage = () => {
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
        <>
            <ThemeProvider theme={theme}>
            <div>
            <Typography variant="h4" component="div" color="primary">Home</Typography>
            <Link to={'/chats'}>
                <Typography variant="h4" component="div" color="primary">
                    Chats
                </Typography>
            </Link>
            <Link to={'/profile'}>
                <Typography variant="h4" component="div" color="primary">
                    Profile
                </Typography>
            </Link>
            </div>
			<div className="App">
				<MessageForm create={createMessage} />
				{messages.length !== 0
				?
				<MessageList remove={removeMessage} messages={messages} title='Messages' />
				:
				<h1 style={{ textAlign: 'center' }}>No messages</h1>
				}
		    </div>
		    </ThemeProvider>
        </>
        
    )
}

export default HomePage;