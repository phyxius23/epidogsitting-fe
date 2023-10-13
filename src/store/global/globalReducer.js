import { GLOBAL_INITIAL_STATE } from "./globalState";
import { GLOBAL_ACTIONS_TYPES } from "./globalTypes";

export const globalReducer = (state = GLOBAL_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case GLOBAL_ACTIONS_TYPES.START_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case GLOBAL_ACTIONS_TYPES.END_LOADING:
			return {
				...state,
				isLoading: false,
			};
		case GLOBAL_ACTIONS_TYPES.SET_ERROR:
			return {
				...state,
				isError: true,
			};
		case GLOBAL_ACTIONS_TYPES.CLEAR_ERROR:
			return {
				...state,
				isError: false,
			};
		case GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE:
			return {
				...state,
				errorMessage: payload,
			};
		case GLOBAL_ACTIONS_TYPES.CLEAR_ERROR_MESSAGE:
			return {
				...state,
				errorMessage: "",
			};
		default:
			return state;
	}
};
