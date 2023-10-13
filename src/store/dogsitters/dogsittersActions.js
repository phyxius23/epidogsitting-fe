import { GLOBAL_ACTIONS_TYPES } from "../global/globalTypes";
import { DOGSITTERS_ACTIONS_TYPES } from "./dogsittersTypes";

/* ***** GET DOGSITTERS ***** */
export const getSearchAction = (query) => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/api/dogsitters";

	return async (dispatch, getState) => {
		try {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.START_LOADING });

			const response = await fetch(
				url +
					"?page=" +
					(query.page ? query.page : "") +
					"&size=" +
					(query.size ? query.size : "") +
					"&sortBy=" +
					(query.sortBy ? query.sortBy : "") +
					"&postalCode=" +
					(query.postalCode ? query.postalCode : "") +
					"&name=" +
					(query.name ? query.name : "") +
					"&offeringType=" +
					(query.offeringType ? query.offeringType : ""),
				{
					method: "GET",
					headers: {
						"Content-type": "application/json; charset=UTF-8",
						Authorization: `Bearer ${token}`,
					},
				}
			);

			if (response.ok) {
				const data = await response.json();

				dispatch({ type: DOGSITTERS_ACTIONS_TYPES.GET_DOGSITTERS, payload: data });
			} else {
				dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
				dispatch({
					type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
					payload: "Fetch non riuscita",
				});
			}
		} catch (error) {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
			dispatch({
				type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
				payload: error.message,
			});
		} finally {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.END_LOADING });
		}
	};
};

/* ***** CLEAR DOGSITTERS ***** */
export const clearDogsitterAction = (dogsitter) => ({
	type: DOGSITTERS_ACTIONS_TYPES.CLEAR_DOGSITTERS,
});

/* ***** SELECTED DOGSITTER ***** */
export const setSelectedDogsitterAction = (dogsitter) => ({
	type: DOGSITTERS_ACTIONS_TYPES.SELECTED_DOGSITTER,
	payload: dogsitter,
});
