import { USER_SIGN_IN, USER_SIGN_OUT, GET_USER_LOADING_ON, GET_USER_LOADING_OFF, GET_USER_ERROR } from "../actions";

const initialState = {
	user: "",
	isLoading: false,
	hasError: false,
	errorMessage: "",
};

const myProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_SIGN_IN:
			return {
				...state,
				user: action.payload,
			};
		case USER_SIGN_OUT:
			return initialState;
		case GET_USER_LOADING_ON:
			return {
				...state,
				isLoading: true,
			};
		case GET_USER_LOADING_OFF:
			return {
				...state,
				isLoading: false,
			};
		case GET_USER_ERROR:
			return {
				...state,
				hasError: true,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};

export default myProfileReducer;
