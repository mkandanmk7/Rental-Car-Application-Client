import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { carReducer } from "./reducer/carReducer";

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const rootReducer = combineReducers({
  carReducer,
});
const store = createStore(
  rootReducer
  // composeEnhancers(applyMiddleware([thunk]))
);

export default store;
