'use client'
import React, { useContext } from 'react';
import callImg from '../../assets/call.png'
import messageImg from '../../assets/meg.png'
import videoPng from '../../assets/video.png'
import { LuPackageOpen } from 'react-icons/lu';
import Image from 'next/image';
import { FriendsContext } from '@/context/FriendsProvider';
const TimeLine = () => {
    const { call, setCall } = useContext(FriendsContext);


    const handleSorted = (value) => {
        if (value === 'oldToNew') {

            const sorted = [...call].sort((a, b) => new Date(a.atCreated) - new Date(b.atCreated));
            setCall(sorted)
        }
        else if(value === 'newToOld'){
            const sorted = [...call].sort((a, b) => new Date(b.atCreated) - new Date(a.atCreated));
            setCall(sorted)
        }
    }


    return (
        <div className='container mx-auto mt-10 px-4 md:px-0'>
            <h1 className='text-5xl font-bold'>Timeline </h1>
            <details className="dropdown mt-4">
                <summary className="btn m-1">Filter timeline</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSorted('oldToNew')}><a>Oldest to Newest</a></li>
                    <li onClick={()=>handleSorted('newToOld')}><a>Newest To Oldest</a></li>
                </ul>
            </details>
            {
                call.length >= 1 ? <div>
                    {
                        call.map(callNotification => {
                            return <div key={callNotification.atCreated} className="w-full px-5 py-2 border border-gray-300 shadow rounded-2xl flex items-center gap-5 mt-4">
                                {
                                    callNotification.type === "Call" && <div>
                                        <Image width={50} height={50} src={callImg} alt="" />
                                    </div>
                                }
                                {
                                    callNotification.type === "Video" && <div>
                                        <Image width={50} height={50} src={videoPng} alt="" />
                                    </div>
                                }
                                {
                                    callNotification.type === "Text" && <div>
                                        <Image width={50} height={50} src={messageImg} alt="" />
                                    </div>
                                }
                                <div className="">
                                    <h1 className='text-lg text-[#64748B]'><span className='font-bold text-xl'>{callNotification.type}</span> with {callNotification.name}</h1>
                                    <h1 className='text-lg text-[#64748B]'>{callNotification.date}</h1>
                                </div>
                            </div>
                        })
                    }

                </div> : <div className='w-full px-5 py-2 border border-gray-300 shadow rounded-2xl flex justify-center mt-3.5 items-center min-h-[60vh]'>
                    <h1 className='text-center text-3xl flex items-center gap-3'><LuPackageOpen /> Timeline is empty</h1>
                </div>
            }

        </div>
    );
};

export default TimeLine;;