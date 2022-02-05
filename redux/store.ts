import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, Store } from "redux";
import logger from "redux-logger";

import rootReducer, { RootState } from "./combineReducers";

const makeStore = () => {
  const store = createStore(rootReducer, applyMiddleware(logger));
  return store;
};

export const wrapper = createWrapper<Store<RootState>>(makeStore);
