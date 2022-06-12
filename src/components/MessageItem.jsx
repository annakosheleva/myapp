import React from "react";
import MyButton from "./UI/button/MyButton";


const MessageItem = (props) => {
	
	return (
		<div className="message">
			<div className="message__content">
				<strong>{props.number}. {props.message.author}</strong>
				<div>
					{props.message.text}
				</div>
			</div>
			<div className="message__btns">
                <MyButton onClick={() => props.remove(props.message)}>
                    Delete
                </MyButton>
			</div>
		</div>	
	)
}

export default MessageItem;