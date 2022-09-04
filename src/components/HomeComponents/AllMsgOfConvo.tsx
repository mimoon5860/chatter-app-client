import React from 'react';
import { useParams } from 'react-router-dom';

const AllMsgOfConvo = () => {
    const { conv_id } = useParams();

    return (
        <div>
            <h1 className='text-center'>Single Conversation details</h1>
        </div>
    );
};

export default AllMsgOfConvo;