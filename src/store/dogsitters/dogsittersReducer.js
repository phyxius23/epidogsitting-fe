import { DOGSITTERS_INITIAL_STATE } from "./dogsittersState";
import { DOGSITTERS_ACTIONS_TYPES } from "./dogsittersTypes";

export const dogsittersReducer = (state = DOGSITTERS_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case DOGSITTERS_ACTIONS_TYPES.GET_DOGSITTERS:
			return {
				...state,
				list: payload.content,
			};
		case DOGSITTERS_ACTIONS_TYPES.CLEAR_DOGSITTERS:
			return DOGSITTERS_INITIAL_STATE;
		case DOGSITTERS_ACTIONS_TYPES.SELECTED_DOGSITTER:
			return {
				...state,
				selectedDogsitter: payload,
			};
		default:
			return state;
	}
};
