import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import goodsReducer from './goodsSlice';
import searchReducer from './searhSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    goods: goodsReducer,
    search: searchReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
