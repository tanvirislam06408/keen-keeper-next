import React, { Suspense, use } from 'react';
import FriendCard from './FriendCard';




const AllFriends = async () => {
    const friendsPromise = await fetch('http://localhost:3000/friends.json');
    const data = await friendsPromise.json();
    


    return (
        <div>
            <h1 className='font-bold text-2xl mt-10'>Your Friends</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                data.map(friend=>{
                    return <FriendCard key={friend.id} friend={friend}/>
                })
            }
            </div>
        </div>
    );
};

export default AllFriends;