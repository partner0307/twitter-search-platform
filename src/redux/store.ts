import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pageReducer as page } from './page';

const store = configureStore({
    reducer: combineReducers({ page })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;