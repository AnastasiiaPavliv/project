import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer,genresReducer} from "./slice";

const rootReducer = combineReducers({
    movies:movieReducer,
    genres:genresReducer
});

const setupStore=()=>configureStore({
    reducer:rootReducer
})
export {setupStore}