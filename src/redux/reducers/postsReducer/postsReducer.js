import { GET_POSTS, LOADING_POSTS, ERROR_POSTS } from "../../actionTypes";

const initialState = {
	posts: [],
	loading: false,
	error: null,
};

export const postsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false,
				error: false,
			};
		case LOADING_POSTS:
			return {
				...state,
				loading: true,
			};
		case ERROR_POSTS:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const loadPosts = () => {
	return async (dispatch) => {
		dispatch({ type: LOADING_POSTS });
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			const data = await response.json();
			dispatch({
				type: GET_POSTS,
				payload: data,
			});
		} catch (e) {
			dispatch({
				type: ERROR_POSTS,
				payload: e.toString(),
			});
		}
	};
};
