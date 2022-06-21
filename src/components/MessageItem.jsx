import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const MessageItem = (props) => {
	
	return (
		<div className="message">
			<div className="message__content">
				<Card sx={{minWidth: 275}}>
					<CardContent>
						<Typography variant="h5" component="div" color="primary">{props.message.author}:</Typography>
						<Typography variant="body2">{props.message.text}</Typography>
					</CardContent>
				</Card>
			</div>
			<div className="message__btns">
                {/* <MyButton onClick={() => props.remove(props.message)}>
                    Delete
                </MyButton> */}
			</div>
		</div>	
	)
}

export default MessageItem;