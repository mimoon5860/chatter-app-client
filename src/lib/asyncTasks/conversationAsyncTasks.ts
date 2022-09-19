import { createAsyncThunk } from '@reduxjs/toolkit';
import fetcher from '../fetcher/fetcher';

// fetch all conversations
export const fetchAllConversations = createAsyncThunk('conversation/fetchAllConversation', async (user_id: string) => {
    const data = await fetcher.get(`/api/conversation/get/all/${user_id}`);
    if (data.success) {
        return data.data;
    } else {
        throw new Error(data.msg);
    }
})