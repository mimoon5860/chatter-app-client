import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl } from '../../utils/constantsData/constantsData';
import fetcher from '../../utils/lib/fetcher';

const AllMsgOfConvo = () => {
    const { conv_id } = useParams();

    return (
        <div>
            <h1 className='text-center'>Single Conversation details</h1>
        </div>
    );
};

export default AllMsgOfConvo;