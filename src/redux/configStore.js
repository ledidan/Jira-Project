import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import JiraReducer from "./reducers/JiraReducer";
import createMiddeWareSaga from "redux-saga";

import rootSaga from "./JiraSagas/rootSaga";
const composeEnhancers =
  typeof window === "object" && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
    ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({})
    : compose;
const middleWareSaga = createMiddeWareSaga();

const rootReducer = combineReducers({
  JiraReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(middleWareSaga))
);

middleWareSaga.run(rootSaga);
