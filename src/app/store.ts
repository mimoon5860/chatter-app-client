import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { conversationSlice } from '../lib/slice/conversationSlice';
import { userSlice } from '../lib/slice/userSlice';

export const store = configureStore({
  reducer: {
    conversation: conversationSlice.reducer,
    user: userSlice.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
