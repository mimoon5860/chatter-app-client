import { createAsyncThunk } from '@reduxjs/toolkit';
import fetcher from '../fetcher/fetcher';

// user login
export const userLogin = createAsyncThunk('user/login', async (body: { phone: string, password: string }) => {
    const data = await fetcher.post({ url: '/api/auth/user/login', body, contentType: 'application/json' });
    if (data.success) {
        return data.data;
    } else {
        throw new Error(data.msg);
    }
})

// user signup
export const userSignUp = createAsyncThunk('user/signup', async (body) => {
    const data = await fetcher.post({ url: "/api/auth/user/signup", body, contentType: 'application/json' });
    if (data.success) {
        return data.data;
    } else {
        throw new Error(data.msg);
    }

})