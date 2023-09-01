import { GET_DOGSITTERS, GET_DOGSITTERS_LOADING_ON, GET_DOGSITTERS_LOADING_OFF, GET_DOGSITTERS_ERROR } from "../actions";

const initialState = {
	content: [],
	isLoading: false,
	hasError: false,
	errorMessage: "",
};

const dogsittersReducer = (state = initialState, action) => {
	switch (action.payload) {
		case GET_DOGSITTERS:
			return {
				...state,
				content: action.payload,
			};
		case GET_DOGSITTERS_LOADING_ON:
			return {
				...state,
				isLoading: true,
			};
		case GET_DOGSITTERS_LOADING_OFF:
			return {
				...state,
				isLoading: false,
			};
		case GET_DOGSITTERS_ERROR:
			return {
				...state,
				hasError: true,
				errorMessage: action.payload,
			};
		default:
			break;
	}
};

export default dogsittersReducer;
