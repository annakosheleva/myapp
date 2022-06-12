import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const MessageForm = ({create}) => {
	const [message, setMessage] = useState({ author: '', text: '' })
	
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
			<form>
				<MyInput
					value={message.author}
					onChange={e => setMessage({...message, author: e.target.value})}
					type='text'
					placeholder="Enter your name" />
				<MyInput
					value={message.text}
					onChange={e => setMessage({...message, text: e.target.value})}
					type='text'
					placeholder="Write text" />
				<MyButton onClick={addNewMessage}>Add message</MyButton>
			</form>
		</div>
		
	)
	
}

export default MessageForm;
