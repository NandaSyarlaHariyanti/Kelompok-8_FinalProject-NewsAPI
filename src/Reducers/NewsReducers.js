const initialState = {
    savedNews: [], 
  };
  
  const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SAVE_NEWS':
        return {
          ...state,
          savedNews: [...state.savedNews, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default NewsReducer;
  