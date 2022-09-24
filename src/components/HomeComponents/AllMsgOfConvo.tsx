import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetcher from '../../lib/fetcher/fetcher';

const AllMsgOfConvo = () => {
    const { convo_id } = useParams();
    const [convoMsg, setConvoMsg] = useState();

    useEffect(() => {
        (async () => {
            const data = await fetcher.get(`/api/chats/get/msgs/${convo_id}`);
            console.log(data)
        })()
    }, [convo_id])

    console.log({ convo_id })

    return (
        <div>
            <h1 className='text-center'>Single Conversation details</h1>
        </div>
    );
};

export default AllMsgOfConvo;