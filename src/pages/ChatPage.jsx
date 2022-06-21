import React from 'react';
import { Link } from 'react-router-dom';
import ChatList from '../components/ChatList';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { useState } from 'react';

const theme = createTheme({
	palette: {
		primary: {
			main: teal[700]
		},
	},
});

const ChatPage = () => {
    const [chatlist] = useState([
		{ name: "Some chat", id: "1" },
		{ name: "Work chat", id: "2" },
		{ name: "Other", id: "3" }
		
	])
    return (
        <>
            <ThemeProvider theme={theme}>
            <div>
            <Link to={'/'}>
                <Typography variant="h4" component="div" color="primary">
                    Home
                </Typography>
            </Link>
                <Typography variant="h4" component="div" color="primary">
                    Chats
                </Typography>
            <Link to={'/profile'}>
                <Typography variant="h4" component="div" color="primary">
                    Profile
                </Typography>
            </Link>
        </div>
            <div className='chatlist'>
				<Box component="form"
				sx={{
					m: 1, border: '2px solid gray', borderRadius: '10px', gap: '10px', width: '400px', height: '280px', margin: '10px', padding: '15px', backgroundColor: '#e9e9e9'
				}}
				noValidate
				avtoComplete='off'
				>
                <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                <List sx={{ margin: '10px 0 10px 0', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					{chatlist.map(item => {
						return (
							<ChatList name={item.name} key={item.id} />
						)
					})}
				</List>
				</Box>
                </div>
                </ThemeProvider>
        </>
        
    )
}

export default ChatPage;