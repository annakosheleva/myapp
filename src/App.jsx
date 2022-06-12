import React, {useState} from "react";
import "./styles/App.css";
import MessageList from './components/MessageList';
import MessageForm from "./components/MessageForm";



function App() {
	const [messages, setMessages] = useState([
		{ id: 1, author: 'Ann', text: 'Hello)' },
		{ id: 2, author: 'Mark', text: 'Hi! How are you?' },
		{ id: 3, author: 'Lisa', text: 'Hi, all..' },
	])

	const createMessage = (newMessage) => {
		setMessages([...messages, newMessage])
	}

	const removeMessage = (message) => {
		setMessages(messages.filter(m => m.id !== message.id))
	}
	
	return (
		<div className="App">
			<MessageForm create={createMessage} />
			{messages.length !== 0
				?
				<MessageList remove={removeMessage} messages={messages} title='List of messages' />
				:
				<h1 style={{ textAlign: 'center' }}>No messages</h1>
			}
			
		</div>
	);
}

export default App;
