import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fetcher from '../../lib/fetcher/fetcher';
import { baseUrl } from '../../utils/constantsData/constantsData';
import { IConversation } from '../../utils/types/conversationTypes';
interface AppProps {
    conversation: IConversation
}
const SingleConversation = ({ conversation }: AppProps) => {
    const [convoDetails, setConvoDetails] = useState<{ _id: string, name: string, photo: string }>({ _id: '', name: '', photo: '' });
    const { convo_id } = useParams();



    useEffect(() => {
        if (conversation.type === 'personal') {
            (async () => {
                const user = conversation.participant.filter(item => item !== '63306a0cc582bf6a44e2d81f');
                const data = await fetcher.get(`/api/user/get/user/name-photo/${user}`);
                setConvoDetails(data.data)
            })()
        }
    }, [])

    return (
        <Link className={`${convo_id === conversation._id ? "single-convo-active text-decoration-none p-2" : "single-convo text-decoration-none p-2"}`} to={`/conversation/${conversation._id}`}>
            <div className='d-flex align-items-center'>
                <div>
                    <img className='convo-img rounded-circle' src={`${baseUrl}/get/image/avatars/${convoDetails.photo}`} alt="" />
                </div>
                <div className='ps-3'>
                    <span className='fw-bold text-dark'> {convoDetails.name}</span>
                    <br />
                    <small>{conversation.lastMsg || "No message!"}</small>
                </div>
            </div>
        </Link>
    );
};

export default SingleConversation;