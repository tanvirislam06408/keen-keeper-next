'use client'
import Link from 'next/link';
import React from 'react';
import { IoMdHome } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { CiStopwatch } from 'react-icons/ci';
import { BsGraphUpArrow } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

const MyLinks = ({ children, href }) => {
    const path=usePathname();
   

    return <Link href={href} className={`${path === href ? 'bg-[#244D3F] text-white rounded-lg' : ''}`}>{children}</Link>
};

export default MyLinks;