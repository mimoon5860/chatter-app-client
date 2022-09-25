import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetcher from '../../lib/fetcher/fetcher';
import { IMsgType } from '../../utils/types/conversationTypes';
import ShowSingleMsg from './ShowSingleMsg';

const AllMsgOfConvo = () => {
    const { convo_id } = useParams();
    const [convoMsg, setConvoMsg] = useState<IMsgType[] | []>([]);


    useEffect(() => {
        (async () => {
            const data = await fetcher.get(`/api/chats/get/msgs/${convo_id}`);
            setConvoMsg(data.data)
        })()
    }, [convo_id])

    console.log({ convoMsg })

    return (
        <div className='all-msg-wrapper'>
            <div className='show-all-msg'>
                {
                    convoMsg.map((msg: IMsgType) => <ShowSingleMsg key={msg._id} msg={msg} />)
                }
            </div>
            <div className='send-msg-inputs'>
                <input type="text" />
                <button>Send</button>
            </div>
        </div>
    );
};

export default AllMsgOfConvo;