import React from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getMessagesSelector } from "../redux/reducers/messagesReducer/messagesSelector";
import { DELETE_MESSAGE, ADD_MESSAGE } from "../redux/actionTypes";


import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const theme = createTheme({
	palette: {
		primary: {
			main: teal[700]
		},
	},
});

const Messages = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const chatMessages = useSelector(getMessagesSelector);
    const dispatch = useDispatch(); 

    const messages = chatMessages.filter((message) => {
        if (!id) return null;
        return message.chatId === Number(id)
    })

    const deleteMessage = (id) => {
        dispatch({
            type: DELETE_MESSAGE,
            payload: id,
            meta: {
                delay: 3000
            }
        })
    }

    const addMessage = () => {
        const newMessage = {
            id: Math.random(),
            title: title,
            chatId: Number(id)
        }
        dispatch({
            type: ADD_MESSAGE,
            payload: newMessage
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Box component="form"
				sx={{
					m: 1, border: '2px solid gray', borderRadius: '10px', gap: '10px', width: '400px', minHeight: '280px', margin: '10px', padding: '15px', backgroundColor: '#e9e9e9'
				}}
				noValidate
				avtoComplete='off'
				>
                <Typography variant="h5" component="div" color="primary">Messages</Typography>
                <TextField sx={{ margin: '10px 0 10px 0', color: 'black', backgroundColor: '#fff' }}
					required
					fullWidth
					id="outlined-required"
					label="Enter your message"    
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <Button variant="contained" size="large" fullWidth  onClick={addMessage}>Add message</Button>
            {messages.map((message) => (
                <ListItem sx={{ margin: '10px 0 10px 0', width: '100%', maxWidth: 380, color: 'black', backgroundColor: '#fff', justifyContent: "space-between"}}>
                    <Typography>{message.title}</Typography>
                    <Button variant="contained" size="small" onClick={() => deleteMessage(message.id)}>X</Button> 
                </ListItem>
            ))}
                
            </Box>
        </ThemeProvider>
    )
}

export default Messages;