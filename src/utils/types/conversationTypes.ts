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

export interface IMsgType {
    _id: string,
    message: string,
    senderId: string,
    status: string,
    file: string[] | [],
    conversation: string,
    createdAt: string,
    updatedAt: string
}

