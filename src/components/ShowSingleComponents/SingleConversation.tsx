import React from 'react';
import { IConversation } from '../../utils/types/conversationTypes';
interface AppProps {
    conversation: IConversation
}
const SingleConversation = ({ conversation }: AppProps) => {

    return (
        <div>
            <span>{conversation.lastMsg}</span>
        </div>
    );
};

export default SingleConversation;