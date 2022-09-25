import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import { fetchAllConversations } from '../../lib/asyncTasks/conversationAsyncTasks';
import { selectConversationState } from '../../lib/states/conversationState/conversationState';
import { selectUserState } from '../../lib/states/userState/userState';
import { userIdTest } from '../../utils/constantsData/constantsData';
import { IConversation } from '../../utils/types/conversationTypes';
import SingleConversation from '../ShowSingleComponents/SingleConversation';

const Conversations: React.FC = () => {
    const dispatch = useAppDispatch();


    const { conversations } = useSelector(selectConversationState);

    useEffect(() => {
        if (!conversations.length) {
            dispatch(fetchAllConversations(userIdTest))
        }
    }, [])

    return (
        <div className='border convo-list-wrapper position-sticky w-100'>
            <div>
                {conversations.map((conversation: IConversation) => <SingleConversation key={conversation._id} conversation={conversation} />)}
            </div>
        </div>
    );
};

export default Conversations;