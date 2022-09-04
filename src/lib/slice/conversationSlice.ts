import { createSlice } from "@reduxjs/toolkit";
import { IConversationState } from "../../utils/types/conversationTypes";
import { conversationExtraReducers, conversationReducers } from "../reducers/conversationReducers";

const initialState: IConversationState = {
    conversations: [],
    status: 'idle',
    error: null
}

export const conversationSlice = createSlice({ name: 'conversations', initialState, reducers: conversationReducers, extraReducers: (builder) => conversationExtraReducers(builder) });