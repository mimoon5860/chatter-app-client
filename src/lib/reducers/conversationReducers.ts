import { ActionReducerMapBuilder } from "@reduxjs/toolkit"
import { IConversationState } from "../../utils/types/conversationTypes"
import { fetchAllConversations } from "../asyncTasks/conversationAsyncTasks";

type ConversationBuilder = ActionReducerMapBuilder<IConversationState>;
export const conversationReducers = {

}

export const conversationExtraReducers = (builder: ConversationBuilder) => {
    builder.addCase(fetchAllConversations.pending, (state) => {
        state.status = 'loading';
    }).addCase(fetchAllConversations.fulfilled, (state, action) => {
        state.status = 'idle';
        state.conversations = action.payload;
    }).addCase(fetchAllConversations.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
    })
}