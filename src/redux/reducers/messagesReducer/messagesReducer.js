import { DELETE_MESSAGE, ADD_MESSAGE } from "../../actionTypes";

const initialState = {
	messages: [
		{
			id: 1,
			title: "Hi",
			chatId: 1,
		},
		{
			id: 4,
			title: "how are you?",
			chatId: 1,
		},
		{
			id: 2,
			title: "ok",
			chatId: 2,
		},
		{
			id: 3,
			title: "morning",
			chatId: 3,
		},
	],
};

export const messagesReducer = (state = initialState, action) => {
	switch (action.type) {
		case DELETE_MESSAGE:
			return {
				...state,
				messages: state.messages.filter(
					(item) => item.id !== action.payload
				),
			};
		case ADD_MESSAGE:
			return {
				...state,
				messages: [...state.messages, action.payload],
			};

		default:
			return state;
	}
};
