import { GLOBAL_ACTIONS_TYPES } from "../global/globalTypes";
import { DOGS_ACTIONS_TYPE } from "./dogsTypes";

/* ***** GET DOGS => testata ok ***** */
export const getDogsAction = () => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/api/dogowner/me/dogs";

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

				dispatch({ type: DOGS_ACTIONS_TYPE.GET_DOGS, payload: data });
			} else {
				dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
				dispatch({
					type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
					payload: "Errore nel reperimento dei dati",
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

// /* ***** SAVE DOG => testata ok ***** */
export const saveDogAction = (bodyDog) => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/api/dogs";

	return async (dispatch, getState) => {
		try {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.START_LOADING });

			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(bodyDog),
			});
			if (response.ok) {
				const data = await response.json();

				dispatch({ type: DOGS_ACTIONS_TYPE.ADD_DOG, payload: data });
			} else {
				dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
				dispatch({
					type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
					payload: "Salvatagio non riuscito",
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

// /* ***** UPDATE DOG =>  ***** */
export const updateDogAction = (dogId, bodyDog) => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/api/dogs/";

	return async (dispatch, getState) => {
		try {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.START_LOADING });

			const response = await fetch(url + dogId, {
				method: "PUT",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(bodyDog),
			});

			if (response.ok) {
				const data = await response.json();

				dispatch({ type: DOGS_ACTIONS_TYPE.UPDATE_DOG, payload: data });
			} else {
				dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
				dispatch({
					type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
					payload: "Fetch non eseguita",
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

/* ***** REMOVE DOG ***** => testata ok */
export const removeDogAction = (dogId) => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/api/dogs/";

	return async (dispatch, getState) => {
		try {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.START_LOADING });

			const response = await fetch(url + dogId, {
				method: "DELETE",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					Authorization: `Bearer ${token}`,
				},
			});
			if (response.ok) {
				dispatch({ type: DOGS_ACTIONS_TYPE.REMOVE_DOG, payload: dogId });
			} else {
				dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
				dispatch({
					type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
					payload: "Eliminazione non riuscita",
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

/* ***** SAVE IMAGE DOG ***** => testata ok */
export const saveImageDogAction = (dogId, imageData) => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/image/";

	return async (dispatch, getState) => {
		console.log(dogId);
		try {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.START_LOADING });

			const response = await fetch(url + dogId + "/image/upload", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: imageData,
			});

			if (response.ok) {
				let data = await response.json();

				dispatch({
					type: DOGS_ACTIONS_TYPE.SAVE_IMAGE_DOG,
					payload: {
						response: data,
						id: dogId,
					},
				});
			} else {
				dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
				dispatch({
					type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
					payload: "Salvatagio non riuscito",
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

/* ***** UPDATE IMAGE DOG ***** => testata ok */
export const updateImageDogAction = (dogId, imageId, imageData) => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/image/";

	return async (dispatch, getState) => {
		try {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.START_LOADING });

			const response = await fetch(url + dogId + "/update/" + imageId + "/image/upload", {
				method: "PUT",
				headers: {
					Authorization: `Bearer ${token}`,
				},
				body: imageData,
			});
			if (response.ok) {
				const data = await response.json();

				dispatch({
					type: DOGS_ACTIONS_TYPE.SAVE_IMAGE_DOG,
					payload: {
						response: data,
						id: dogId,
					},
				});
			} else {
				dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
				dispatch({
					type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
					payload: "Update non riuscito",
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

/* ***** REMOVE IMAGE DOG ***** => testata ok */
export const removeImageDogAction = (dog) => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/image/delete/";

	return async (dispatch, getState) => {
		try {
			dispatch({ type: GLOBAL_ACTIONS_TYPES.START_LOADING });

			const response = await fetch(url + dog.image.id, {
				method: "DELETE",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					Authorization: `Bearer ${token}`,
				},
			});

			if (response.ok) {
				dispatch({ type: DOGS_ACTIONS_TYPE.REMOVE_IMAGE_DOG, payload: dog.id });
			} else {
				dispatch({ type: GLOBAL_ACTIONS_TYPES.SET_ERROR });
				dispatch({
					type: GLOBAL_ACTIONS_TYPES.SET_ERROR_MESSAGE,
					payload: "Eliminazione non riuscita",
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
