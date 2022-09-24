import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetcher from '../../lib/fetcher/fetcher';
import { baseUrl } from '../../utils/constantsData/constantsData';
import { IConversation } from '../../utils/types/conversationTypes';
interface AppProps {
    conversation: IConversation
}
const SingleConversation = ({ conversation }: AppProps) => {
    const [convoDetails, setConvoDetails] = useState<{ _id: string, name: string, photo: string }>({ _id: '', name: '', photo: '' });

    console.log({ conversation, convoDetails })

    useEffect(() => {
        (async () => {
            const data = await fetcher.get(`/api/user/get/user/name-photo/${conversation.participant[0]}`);
            setConvoDetails(data.data)
        })()
    }, [])

    return (
        <Link className='text-decoration-none p-2 single-convo' to={`/conversation/${conversation._id}`}>
            <div>
                <img className='convo-img' src={`${baseUrl}/get/image/avatars/${convoDetails.photo}`} alt="" />
                <span className='ps-3'>
                    {convoDetails.name}
                    {conversation.lastMsg}
                </span>
            </div>
        </Link>
    );
};

export default SingleConversation;