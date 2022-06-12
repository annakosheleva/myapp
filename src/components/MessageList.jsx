import React from "react";
import MessageItem from "./MessageItem";

const MessageList = ({messages, title, remove}) => {
	
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				{title}
			</h1>
			{messages.map((message, index) =>
				<MessageItem remove={remove} number={index + 1} message={message} key={message.id} />
			)}
		</div>
	)
	
}

export default MessageList;
