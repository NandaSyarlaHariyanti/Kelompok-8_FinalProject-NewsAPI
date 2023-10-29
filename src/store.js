// store.js

import { createStore, } from 'redux';
import rootReducer from './Reducers/NewsReducers';

const store = createStore(
  rootReducer,
  // Middleware (jika diperlukan)
);

export default store;
