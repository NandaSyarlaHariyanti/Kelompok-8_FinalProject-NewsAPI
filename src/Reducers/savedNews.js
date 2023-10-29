const initialState = [];

const savedNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SAVED_NEWS":
      return action.payload;
    case "UNSAVE_NEWS":
      return state.filter((savedArticle) => savedArticle.title !== action.payload.title);
    default:
      return state;
  }
};

export default savedNewsReducer;
