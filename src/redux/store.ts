import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index";
import { thunk } from "redux-thunk";

// https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/Recipes.md#using-in-a-typescript-project

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
