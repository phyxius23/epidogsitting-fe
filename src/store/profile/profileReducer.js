import { PROFILE_INITIAL_STATE } from "./profileState";
import { PROFILE_ACTIONS_TYPES } from "./profileTypes";

export const profileReducer = (state = PROFILE_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case PROFILE_ACTIONS_TYPES.GET_PROFILE:
			return {
				...state,
				me: payload,
			};
		case PROFILE_ACTIONS_TYPES.SIGN_OUT_PROFILE:
			return PROFILE_INITIAL_STATE;
		default:
			return state;
	}
};
