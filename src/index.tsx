import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import configureStore from "./redux/store"
import { loadState, saveState } from './utils/storage';
import lodash from "lodash";

const persistedState = loadState();
const store = configureStore(persistedState);
store.subscribe(lodash.throttle(() => {
    saveState({
        locations: store.getState().locations
    })
}, 1000));
(window as any).store = store;
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
