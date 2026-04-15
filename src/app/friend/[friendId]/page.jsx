import React from 'react';

const FriendDetails = async({params}) => {
    const {friendId}=await params;
    const res=await fetch('/friends.json');
    const data=await res.json();
    
    return (
        <div>
            details
        </div>
    );
};

export default FriendDetails;