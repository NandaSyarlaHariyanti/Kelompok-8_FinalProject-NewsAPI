export const setSavedNews = (savedNews) => ({
    type: "SET_SAVED_NEWS",
    payload: savedNews,
  });
  
  export const unSaveNews = (article) => ({
    type: "UNSAVE_NEWS",
    payload: article,
  });
  