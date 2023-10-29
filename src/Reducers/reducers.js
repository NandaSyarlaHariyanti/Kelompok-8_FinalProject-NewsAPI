import { combineReducers } from "redux";
import { SET_SAVED_NEWS, UNSAVE_NEWS } from "./actions/savedNews/setSavedNews";

const savedNewsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SAVED_NEWS:
      return [...state, action.payload];
    case UNSAVE_NEWS:
      return state.filter((news) => news.id !== action.payload.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  savedNews: savedNewsReducer,
});

export default rootReducer;
