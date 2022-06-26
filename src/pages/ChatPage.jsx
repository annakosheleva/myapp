import React from 'react';
import { Link } from 'react-router-dom';
import ChatList from '../components/ChatList';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const theme = createTheme({
	palette: {
		primary: {
			main: teal[700]
		},
	},
});

const ChatPage = () => {
    const [chatlist, setChatlist] = useState([
		{ name: "Mom, Dad, ..", id: "1" },
		{ name: "Work chat", id: "2" },
		{ name: "Other", id: "3" }
		
    ])

    const [name, setName] = useState('');

    const addNewChat = () => {
		const newChat = {
            name: name,
            id: Date.now()
		}
        setChatlist(prevState => [...prevState, newChat])
        setName('')
	}
    
    const deleteHandler = (id) => {
        const filteredItems = chatlist.filter((item) => item.id !== id);
        setChatlist(filteredItems);
    }

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
                    <Link to={'/count'}>
                <Typography variant="h4" component="div" color="primary">
                    Count
                </Typography>
            </Link>
        </div>
            <div className='chatlist'>
				<Box component="form"
				sx={{
					m: 1, border: '2px solid gray', borderRadius: '10px', gap: '10px', width: '400px', minHeight: '280px', margin: '10px', padding: '15px', backgroundColor: '#e9e9e9'
				}}
				noValidate
				avtoComplete='off'
				>
                <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                <List sx={{ margin: '10px 0 10px 0', width: '100%', maxWidth: 360, color: 'black', backgroundColor: '#fff'}}>
					{chatlist.map(item => {
                        return (
                            <div className='chats'>
                            <ChatList name={item.name} key={item.id} />
                                <Button sx={{ margin: '10px 20px 10px 0' }} variant="contained" size="small"
                                onClick={() => deleteHandler(item.id)}
                                >X</Button></div>
                            
						)
					})}
                        </List>
                        
                    </Box>


                    <Box component="form"
				sx={{
					m: 1, border: '2px solid gray', borderRadius: '10px', gap: '10px', width: '400px', minHeight: '280px', margin: '10px', padding: '15px', backgroundColor: '#e9e9e9'
				}}
				noValidate
				avtoComplete='off'
			>
				<Typography variant="h5" component="div" color="primary">Chat form</Typography>
				<TextField sx={{ margin: '10px 0 10px 0', color: 'black', backgroundColor: '#fff' }}
					id="outlined-multiline-flexible" fullWidth
					label="Write text"
					multiline
					maxRows={4}
					value={name}
					// inputRef={inputRef}
					onChange={(e) => setName(e.target.value)}
				/>
                        <Button sx={{ margin: '10px 0 10px 0' }} variant="contained" size="large" fullWidth
                        onClick={addNewChat}
                        >Add chat</Button>
			</Box>
                </div>
                </ThemeProvider>
        </>
        
    )
}

export default ChatPage;