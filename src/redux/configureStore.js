import { applyMiddleware, combineReducers, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { chatsReducer } from "./reducers/chatsReducer/chatsReducer";
import { messagesReducer } from "./reducers/messagesReducer/messagesReducer";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const logger = (store) => (next) => (action) => {
	console.log("dispatching", action);

	let result = next(action);
	console.log("after", store.getState());

	return result;
};

const time = (store) => (next) => (action) => {
	const delay = action?.meta?.delay;

	if (!delay) {
		return next(action);
	}

	const timeOut = setTimeout(() => next(action), delay);

	return () => {
		console.log("deleting...");
		clearTimeout(timeOut);
	};
};

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	chats: chatsReducer,
	messages: messagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer,
	applyMiddleware(logger, time)
);
export const persist = persistStore(store);
