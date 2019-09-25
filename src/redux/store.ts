import { createStore /*, combineReducers, applyMiddleware */ } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {rootReducer } from "./reducers";
export default function configureStore(persistedState:any){
    const store = createStore(rootReducer, persistedState, composeWithDevTools());
    return store;
}