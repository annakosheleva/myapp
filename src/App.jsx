import "./App.css";
import Message from "./Message";

function App() {
	const name = "Anna";
	const message = "My First React App";

	return (
		<div className="App">
			<header className="App-header">
				<Message props={message} />
				<h1>Hello, {name}</h1>
			</header>
		</div>
	);
}

export default App;
