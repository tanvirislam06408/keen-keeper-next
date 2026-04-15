import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='min-h-[60vh] flex items-center justify-center'>
            <HashLoader color="#244D3F" />
        </div>
    );
};

export default Loading;