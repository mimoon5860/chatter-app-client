import React, { useEffect } from 'react';
import { baseUrl } from '../../utils/constantsData/constantsData';
import fetcher from '../../utils/lib/fetcher';

const Conversations = () => {

    useEffect(() => {
        (async function () {
            const data = await fetcher.get('/api/conversation/get/all/62dd66f3079a0eb4143f6ac9');
            console.log({ data });
        })();
    }, [])

    return (
        <div>
            <h1>See All Conversations</h1>
        </div>
    );
};

export default Conversations;