import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./reducers/chatsReducer/chatsReducer";
import { messagesReducer } from "./reducers/messagesReducer/messagesReducer";

const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messagesReducer
})

export const store = createStore(rootReducer);
