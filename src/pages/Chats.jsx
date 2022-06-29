import React from "react";
import "../styles/App.css";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"
import { getChatsSelector } from "../redux/reducers/chatsReducer/chatsSelector";


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';


const theme = createTheme({
	palette: {
		primary: {
			main: teal[700]
		},
	},
});

const Chats = () => {
    const chats = useSelector(getChatsSelector);
    return (
        <ThemeProvider theme={theme}>
            <Box component="form"
				sx={{
					m: 1, border: '2px solid gray', borderRadius: '10px', gap: '10px', width: '400px', minHeight: '280px', margin: '10px', padding: '15px', backgroundColor: '#e9e9e9'
				}}
				noValidate
				avtoComplete='off'
				>
                <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                
                {chats.map((chat) => (
                    <ListItem sx={{ margin: '10px 0 10px 0', width: '100%', maxWidth: 360, color: 'black', backgroundColor: '#fff', justifyContent: "space-between"}}>
                    <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
                    <Link key={chat.id} to={`/messages/${chat.id}`}>
                    <ListItemText primary={chat.name} />
                    </Link>
                    <Button sx={{ margin: '10px 20px 10px 0' }} variant="contained" size="small" >X</Button>
                    </ListItem>
                
                ))}
            </Box>
        </ThemeProvider>
    )
}

export default Chats;