import { createStore, combineReducers } from "redux";
import savedNewsReducer from "./reducers/savedNews";

const rootReducer = combineReducers({
  savedNews: savedNewsReducer,
});

const store = createStore(rootReducer);

export default store;
