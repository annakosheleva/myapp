import { applyMiddleware, combineReducers, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { chatsReducer } from "./reducers/chatsReducer/chatsReducer";
import { messagesReducer } from "./reducers/messagesReducer/messagesReducer";
import { postsReducer } from "./reducers/postsReducer/postsReducer";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";

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
	posts: postsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
	persistedReducer,
	applyMiddleware(thunk, logger, time)
);
export const persist = persistStore(store);
