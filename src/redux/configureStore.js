// import

import { configureStore } from '@reduxjs/toolkit';
import { covidReducer } from './coronavirus-api/covidreducer';

// configure store

const store = configureStore({
  reducer: {
    details: covidReducer,
  },
});

// export store

export default store;
