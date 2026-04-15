import Banner from '@/components/Banner/Banner';
import AllFriends from '@/components/Friends/AllFriends';
import React from 'react';

const HomePage = () => {
    return (
        <div className='container mx-auto'>
            <Banner/>
            <AllFriends/>
        </div>
    );
};

export default HomePage;