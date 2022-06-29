import { GET_MESSAGES } from "../../actionTypes";

const initialState = {
	chats: [
		{
			id: 1,
			name: "Kris",
		},
		{
			id: 2,
			name: "Mom",
		},
		{
			id: 3,
			name: "Dad",
		},
	],
};

export const chatsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MESSAGES:
			return {
				...state,
				chats: state.chats,
			};
		default:
			return state;
	}
};
