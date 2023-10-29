export const saveNews = (article) => {
    return {
      type: 'SAVE_NEWS',
      payload: article,
    };
  };
  