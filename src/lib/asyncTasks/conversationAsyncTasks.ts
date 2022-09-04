import { createAsyncThunk } from '@reduxjs/toolkit';
import fetcher from '../fetcher/fetcher';

// fetch all conversations
export const fetchAllConversations = createAsyncThunk('conversation/fetchAllConversation', async () => {
    const data = await fetcher.get('/api/conversation/get/all/62dd66f3079a0eb4143f6ac9');
    if (data.success) {
        return data.data;
    } else {
        throw new Error('No data provided from the server');
    }
})