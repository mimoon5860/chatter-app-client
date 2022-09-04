import { RootState } from "../../../app/store";
import { IConversationState } from "../../../utils/types/conversationTypes";

const conversationState: IConversationState = {
    conversations: [],
    status: 'idle',
    error: null
}

export const selectConversationState = (state: RootState) => {
    return state.conversation;
}

export default conversationState;