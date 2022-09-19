import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { fetchAllConversations } from '../../lib/asyncTasks/conversationAsyncTasks';
import { selectConversationState } from '../../lib/states/conversationState/conversationState';
import { selectUserState } from '../../lib/states/userState/userState';
import { IConversation } from '../../utils/types/conversationTypes';
import SingleConversation from '../ShowSingleComponents/SingleConversation';

const Conversations: React.FC = () => {
    const dispatch = useAppDispatch();
    const { conversations } = useSelector(selectConversationState);
    const { user } = useSelector(selectUserState);

    useEffect(() => {
        if (!conversations.length && user) {
            dispatch(fetchAllConversations(user._id || ""))
        }
    }, [])

    return (
        <div>
            <div>
                {conversations.map((conversation: IConversation) => <SingleConversation key={conversation._id} conversation={conversation} />)}
            </div>
        </div>
    );
};

export default Conversations;