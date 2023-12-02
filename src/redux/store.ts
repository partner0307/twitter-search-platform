import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pageReducer as page } from './page';
import { followerReducer as follower } from './follower'

const store = configureStore({
    reducer: combineReducers({ page, follower })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;