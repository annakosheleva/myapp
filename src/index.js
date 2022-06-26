import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
	count: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "plus":
			return {
				...state,
				count: state.count + 1,
			};
		case "minus":
			return {
				...state,
				count: state.count - 1,
			};
		case "reset":
			return {
				...state,
				count: (state.count = 0),
			};
		default:
			return state;
	}
};

const store = createStore(reducer);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
