export const GET_USER_ERROR = "GET_USER_ERROR";
export const GET_USER_LOADING_ON = "GET_USER_LOADING_ON";
export const GET_USER_LOADING_OFF = "GET_USER_LOADING_OFF";

export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_SIGN_OUT = "USER_SIGN_OUT";

export const GET_DOGSITTERS = "GET_DOGSITTERS";
export const GET_DOGSITTERS_LOADING_ON = "GET_DOGSITTERS_LOADING_ON";
export const GET_DOGSITTERS_LOADING_OFF = "GET_DOGSITTERS_LOADING_OFF";
export const GET_DOGSITTERS_ERROR = "GET_DOGSITTERS_ERROR";

// export const GET_USER_LOADING_OFF = "GET_USER_LOADING_OFF";
// export const GET_USER_LOADING_OFF = "GET_USER_LOADING_OFF";
// export const GET_USER_LOADING_OFF = "GET_USER_LOADING_OFF";
// export const GET_USER_LOADING_OFF = "GET_USER_LOADING_OFF";

/* ***** SIGN IN MY PROFILE ***** */
export const getUserLoggedAction = (setIsLoading) => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/api/dogowner/me";

	return async (dispatch) => {
		try {
			dispatch({ type: GET_USER_LOADING_ON });

			let resp = await fetch(url, {
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					Authorization: `Bearer ${token}`,
				},
			});
			if (resp.ok) {
				let data = await resp.json();
				setIsLoading(false);
				// toast.success("Utente loggato");

				dispatch({ type: USER_SIGN_IN, payload: data });
				dispatch({ type: GET_USER_LOADING_OFF });
			} else {
				console.log("errore");

				dispatch({ type: GET_USER_ERROR, payload: "Errore nel reperimento dei dati" });
			}
		} catch (error) {
			console.log(error);

			dispatch({ type: GET_USER_ERROR, payload: "Errore nel reperimento dei dati" });
			dispatch({ type: GET_USER_LOADING_OFF });
		}
	};
};

/* ***** SIGN OUT MY PROFILE ***** */
export const logoutAction = () => {
	localStorage.removeItem("token");

	return async (dispatch) => {
		dispatch({ type: USER_SIGN_OUT });
		// dispatch({ type: FAVORITE_LOGOUT });
		// dispatch({ type: DOGSITTER_SELECTED_LOGOUT });
		// dispatch({ type: DOGSITTERS_LOGOUT });
	};
};

export const getDogsittersAction = () => {
	const token = localStorage.getItem("token");
	const url = "http://localhost:5001/dogsitters";

	return async (dispatch, getState) => {
		try {
			dispatch({
				type: GET_DOGSITTERS_LOADING_ON,
			});
			let resp = await fetch(url, {
				method: "GET",
				headers: {
					"Content-type": "application/json; charset=UTF-8",
					Authorization: `Bearer ${token}`,
				},
			});
			if (resp.ok) {
				let fetchedDogSitters = await resp.json();
				dispatch({ type: GET_DOGSITTERS, payload: fetchedDogSitters });
			} else {
				console.log("error");
				dispatch({
					type: GET_DOGSITTERS_ERROR,
					payload: "Errore nel reperimento dei dati",
				});
			}
		} catch (error) {
			console.log(error);

			dispatch({
				type: GET_DOGSITTERS_ERROR,
				payload: "Errore nel reperimento dei dati: " + error.message,
			});
		}
	};
};
