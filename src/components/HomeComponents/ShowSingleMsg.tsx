import React from 'react';
import { userIdTest } from '../../utils/constantsData/constantsData';
import { IMsgType } from '../../utils/types/conversationTypes';


const ShowSingleMsg = ({ msg }: { msg: IMsgType }) => {
    console.log({ msg })
    return (
        <>
            {
                msg.senderId === userIdTest ?
                    <div className='single-msg text-end text-white my-2'>
                        <span className='bg-success px-2 py-1 rounded-2'>{msg.message}</span>
                    </div> :
                    <div className='text-start text-white my-2'>
                        <span className='bg-secondary px-2 py-1 rounded-2'>{msg.message}</span>
                    </div>
            }

        </>
    );
};

export default ShowSingleMsg;