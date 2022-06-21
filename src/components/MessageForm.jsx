import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { useRef } from 'react';
import { Typography } from '@mui/material';


const MessageForm = ({create}) => {
	const [message, setMessage] = useState({ author: '', text: '' })

	const inputRef = useRef(null);
	
	const addNewMessage = (e) => {
		e.preventDefault()
		const newMessage = {
			...message, id: Date.now()
		}
		create(newMessage)
		setMessage({author: '', text: ''})
	}
	
	return (
		<div>
			<Box component="form"
				sx={{
					m: 1, border: '2px solid gray', borderRadius: '10px', gap: '10px', width: '400px', height: '280px', margin: '10px', padding: '15px', backgroundColor: '#e9e9e9'
				}}
				noValidate
				avtoComplete='off'
			>
				<Typography variant="h5" component="div" color="primary">Message form</Typography>
				<TextField sx={{ margin: '10px 0 10px 0', color: 'black', backgroundColor: '#fff' }}
					required
					fullWidth
					id="outlined-required"
					label="Enter your name"
					value={message.author}
					onChange={e => setMessage({ ...message, author: e.target.value })}
					/>
				<TextField sx={{ margin: '10px 0 10px 0', backgroundColor: '#fff' }}
					id="outlined-multiline-flexible" fullWidth
					label="Write text"
					multiline
					maxRows={4}
					value={message.text}
					inputRef={inputRef}
					onChange={e => setMessage({ ...message, text: e.target.value })}
				/>
				<Button sx={{ margin: '10px 0 10px 0' }} variant="contained" size="large" fullWidth
					onClick={addNewMessage}>Add message</Button>
			</Box>
		</div>
		
	)
	
}

export default MessageForm;
