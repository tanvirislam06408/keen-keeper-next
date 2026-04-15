'use client'
import React, { createContext, useState } from 'react';

export const FriendsContext = createContext();


const FriendsProvider = ({ children }) => {


    const [friendsData, setFriendsData] = useState([]);
    const [call, setCall] = useState([])
     const data={
        friendsData,
        setFriendsData,
        call,
        setCall
    }
    return (
        <FriendsContext.Provider value={data}>
            {children}
        </FriendsContext.Provider>
    );
};

export default FriendsProvider;