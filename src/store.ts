import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducer";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
