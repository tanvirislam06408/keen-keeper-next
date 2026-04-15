import React, { useContext } from 'react';
// import { FriendsContext } from '../../../context/FriendsProvider';
import Image from 'next/image';
import Link from 'next/link';

const FriendCard = ({ friend }) => {

    // const {friendsData,setFriendsData}=useContext(FriendsContext);

    
    

    const { picture, name, email, days_since_contact, status, tags, next_due_date, bio, goal,id } = friend;
    return (
        <Link href={`/friends/${id}`} className="card border border-gray-200 shadow-xl">
            <figure className="px-10 pt-10 ">
                <Image
                    loading='eager'
                    width={200}
                    height={200}
                    src={picture}
                    alt="Shoes"
                    className="rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{days_since_contact}d ago</p>
                <div className="card-actions flex flex-col justify-center items-center">
                    <div className="gap-2 flex">
                        {tags.map((t, i) => {

                            return <p key={i} className='badge text-[#244D3F] font-medium bg-[#CBFADB]'>{t}</p>
                        })}
                    </div>
                    <div className="mt-2.5">
                        {
                            status === "overdue" && <div className={`badge text-white font-medium bg-[#EF4444] }`}>{status}</div>
                        }
                        {
                            status === "on-track" && <div className={`badge text-white font-medium bg-[#244D3F] }`}>{status}</div>
                        }
                        {
                            status === "almost due" && <div className={`badge text-white font-medium bg-[#EFAD44] }`}>{status}</div>
                        }
                    </div>

                </div>
            </div>
        </Link>
    );
};

export default FriendCard;