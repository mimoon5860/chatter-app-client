import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../utils/types/userType";
import { userExtraReducers, userReducer } from "../reducers/userReducers";

const initialState: IUserState = {
    user: null,
    status: 'idle',
    error: null
}

export const userSlice = createSlice({ name: 'user', initialState, reducers: userReducer, extraReducers: (builder) => userExtraReducers(builder) });