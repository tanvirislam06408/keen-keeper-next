'use client'

import React, { useContext } from 'react';
import Image from 'next/image';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'
import { format } from 'date-and-time';
import { toast } from 'react-toastify';
import { FriendsContext } from '@/context/FriendsProvider';


const QuicIn = ({ name }) => {
    const { call, setCall } = useContext(FriendsContext);
    
    const handleAddCalls = (c) => {
        const date = new Date();
        const formatted = format(date, 'MMMM D, YYYY');
        const callData = {
            type: c,
            name: name,
            date: formatted,
            atCreated: Date.now()
        }
        console.log(callData);
        setCall([...call, callData])
        toast.success(`${name} ${c} successfully`)

    }
    
    return (
        <div>
            <div className=' mt-5 px-4 py-8 rounded-2xl shadow border border-gray-200'>
                <p className='font-medium text-lg'>Quick Check-In</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                    <div onClick={() => handleAddCalls("Call")} className="px-4 cursor-pointer  py-8 w-full gap-2.5 rounded-2xl shadow border border-gray-200 flex flex-col items-center justify-center">
                        <div>
                            <Image width={200} height={200} src={callImg} alt="" />
                        </div>
                        <h1 className='text-lg'>Call</h1>
                    </div>

                    <div onClick={() => handleAddCalls("Text")} className="px-4 py-8  cursor-pointer w-full gap-2.5 rounded-2xl shadow border border-gray-200 flex flex-col items-center justify-center">
                        <div>
                            <Image width={200} height={200} src={textImg} alt="" />
                        </div>
                        <h1 className='text-lg'>Text</h1>
                    </div>

                    <div onClick={() => handleAddCalls("Video")} className="px-4 cursor-pointer py-8 w-full gap-2.5 rounded-2xl shadow border border-gray-200 flex flex-col items-center justify-center">
                        <div>
                            <Image width={200} height={200} src={videoImg} alt="" />
                        </div>
                        <h1 className='text-lg'>Video</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuicIn;