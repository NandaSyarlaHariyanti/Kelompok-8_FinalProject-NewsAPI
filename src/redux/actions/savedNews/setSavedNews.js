export const SET_SAVED_NEWS = "SET_SAVED_NEWS";

export const setSavedNews = (news) => {
  return {
    type: SET_SAVED_NEWS,
    payload: news,
  };
};
