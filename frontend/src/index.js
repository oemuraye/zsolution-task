import React from 'react';
import ReactDOM from 'react-dom/client';
import reducers from "./components/reducers/reducer";
import { Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

// import {configureStore } from '@reduxjs/toolkit'

import './index.css';
import App from './App';

// const store = configureStore({
//  reducer: rootReducer,
// });

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);


