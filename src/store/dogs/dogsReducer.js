import { DOGS_INITIAL_STATE } from "./dogsState";
import { DOGS_ACTIONS_TYPE } from "./dogsTypes";

export const dogsReducer = (state = DOGS_INITIAL_STATE, action) => {
	const { type, payload } = action;

	switch (type) {
		case DOGS_ACTIONS_TYPE.GET_DOGS:
			return {
				...state,
				list: payload,
			};
		case DOGS_ACTIONS_TYPE.ADD_DOG:
			return {
				...state,
				list: [...state.list, payload],
			};
		case DOGS_ACTIONS_TYPE.REMOVE_DOG:
			return {
				...state,
				list: [...state.list.filter((dog) => dog.id !== payload)],
			};
		case DOGS_ACTIONS_TYPE.UPDATE_DOG:
			return {
				...state,
				list: [
					...state.list.map((dog) => {
						if (dog.id === payload.id) {
							return payload;
						} else {
							return dog;
						}
					}),
				],
			};
		case DOGS_ACTIONS_TYPE.CLEAR_DOGS:
			return DOGS_INITIAL_STATE;
		case DOGS_ACTIONS_TYPE.SAVE_IMAGE_DOG:
			return {
				...state,
				list: [
					...state.list.map((dog) => {
						if (dog.id === payload.id) {
							return {
								...dog,
								image: payload.response,
							};
						} else {
							return dog;
						}
					}),
				],
			};
		case DOGS_ACTIONS_TYPE.REMOVE_IMAGE_DOG:
			return {
				...state,
				list: [
					...state.list.map((dog) => {
						if (dog.id === payload) {
							return {
								...dog,
								image: null,
							};
						} else {
							return dog;
						}
					}),
				],
			};
		default:
			return state;
	}
};
