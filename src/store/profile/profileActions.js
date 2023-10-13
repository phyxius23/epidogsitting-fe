import { DOGS_ACTIONS_TYPE } from "../dogs/dogsTypes";
import { DOGSITTERS_ACTIONS_TYPES } from "../dogsitters/dogsittersTypes";
import { GLOBAL_ACTIONS_TYPES } from "../global/globalTypes";
import { PROFILE_ACTIONS_TYPES } from "./profileTypes";

/* ***** SIGN IN PROFILE (GET TOKEN) ***** */
export const loginProfileAction = (login) => {
	const url = "http://localhost:5001/auth/login";

	return async (dispatch, getState) => {
		try {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.START_LOADING });

			const response = await fetch(url, {
				method: "POST",
				body: JSON.stringify(login),
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.ok) {
				const data = await response.json();

				// dispatch({ type: GLOBAL_ACTIONS_TYPES.END_LOADING });
				localStorage.setItem("token", data.accessToken);
			} else {
				// dispatch({ type: GLOBAL_ACTIONS_TYPES.END_LOADING });
				dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
				dispatch({
					type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
					action: "Credenziali errate",
				});
			}
		} catch (error) {
			// dispatch({ type: GLOBAL_ACTIONS_TYPES.END_LOADING });
			dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
			dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE, action: error.message });
		} finally {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.END_LOADING });
		}
	};
};

/* ***** GET MY PROFILE ***** */
export const getProfileAction = () => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/api/dogowner/me";

	return async (dispatch, getState) => {
		try {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.START_LOADING });

			const response = await fetch(url, {
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.ok) {
				const data = await response.json();

				// dispatch({ type: GLOBAL_ACTIONS_TYPES.END_LOADING });
				dispatch({ type: PROFILE_ACTIONS_TYPES.GET_PROFILE, payload: data });
			} else {
				// dispatch({ type: GLOBAL_ACTIONS_TYPES.END_LOADING });
				dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
				dispatch({
					type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
					payload: "Errore nel reperimento dei dati",
				});
			}
		} catch (error) {
			// dispatch({ type: GLOBAL_ACTIONS_TYPES.END_LOADING });
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

/* ***** SIGN OUT PROFILE ***** */
export const logoutProfileAction = () => {
	localStorage.removeItem("token");

	return async (dispatch) => {
		// dispatch({ type: USER_SIGN_OUT });
		// dispatch({ type: FAVORITE_LOGOUT });
		// dispatch({ type: DOGSITTER_SELECTED_LOGOUT });
		// dispatch({ type: DOGSITTERS_LOGOUT });
		dispatch({ type: PROFILE_ACTIONS_TYPES.SIGN_OUT_PROFILE });
		dispatch({ type: DOGSITTERS_ACTIONS_TYPES.CLEAR_DOGSITTERS });
		dispatch({ type: DOGS_ACTIONS_TYPE.CLEAR_DOGS });
	};
};
