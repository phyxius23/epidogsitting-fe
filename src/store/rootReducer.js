import { combineReducers } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { globalReducer } from "./global/globalReducer";
import { profileReducer } from "./profile/profileReducer";
import { dogsittersReducer } from "./dogsitters/dogsittersReducer";
import { dogsReducer } from "./dogs/dogsReducer";
import { favoritesReducer } from "./favorites/favoritesReducer";

// *************** COMBINE REDUCER WITH REDUX ***************
export const rootReducer = combineReducers({
	global: globalReducer,
	profile: profileReducer,
	dogsitters: dogsittersReducer,
	dogs: dogsReducer,
	favorites: favoritesReducer,
	// selectedDogsitter: selectedDogsitterRed
});

// *************** PERSIST CONFIG WITH REDUX ***************
const persistConfig = {
	key: "root",
	storage,
	transform: [
		encryptTransform({
			secretKey: process.env.REACT_APP_PERSIST_KEY,
		}),
	],
};

// *************** PERSIST (PERSIST CONFIG + ROOT REDUCER) WITH REDUX ***************
export const persistedReducer = persistReducer(persistConfig, rootReducer);
