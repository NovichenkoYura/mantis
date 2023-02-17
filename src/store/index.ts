import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import goodsReducer from './goodsSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    goods: goodsReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
