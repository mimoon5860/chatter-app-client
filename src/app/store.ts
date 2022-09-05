import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { conversationSlice } from '../lib/slice/conversationSlice';

export const store = configureStore({
  reducer: {
    conversation: conversationSlice.reducer
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
