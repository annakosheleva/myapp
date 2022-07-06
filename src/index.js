import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { persist, store } from "./redux/configureStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate persistor={persist}>
				<App />
			</PersistGate>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
