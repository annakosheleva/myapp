import * as React from 'react';
import MessageItem from "./MessageItem";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const MessageList = ({messages, title, remove}) => {
	
	return (
		<div>
			<Box component="form"
				sx={{
					m: 1, border: '2px solid gray', borderRadius: '10px', gap: '10px', width: '400px', minHeight: '330px', margin: '10px', padding: '15px', backgroundColor: '#e9e9e9'
				}}
				noValidate
				avtoComplete='off'
			>
			<Typography variant="h5" component="div" color="primary">
				{title}
			</Typography>
			{messages.map((message, index) =>
				<MessageItem remove={remove} number={index + 1} message={message} key={message.id} />
			)}
			</Box>
		</div>
			
		
	)
	
}

export default MessageList;
