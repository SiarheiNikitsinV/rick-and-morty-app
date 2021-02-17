import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import listReducer from "./reducers/listReducer";
import reportWebVitals from "./reportWebVitals";
import List from "./containers/List";
import rootSaga from "./sagas/sagas";
import "./index.css";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  listReducer,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const app = (
  <Provider store={store}>
    <List />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
