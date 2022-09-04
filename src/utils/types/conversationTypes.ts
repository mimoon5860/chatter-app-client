export interface IConversation {
    _id: string,
    creator: string,
    participant: string[],
    type: string,
    lastMsg: string,
    name: string | null,
    coverImg: string | null
}

export interface IConversationState {
    conversations: IConversation[],
    status: 'idle' | 'loading' | 'failed',
    error: any
}