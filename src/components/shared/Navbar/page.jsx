import React from 'react';
import navLogo from '../../../assets/logo.png'

import Image from 'next/image';
import Link from 'next/link';
import MyLinks from './MyLinks';
import { BsGraphUpArrow } from 'react-icons/bs';
import { CiStopwatch } from 'react-icons/ci';
import { HiHome } from 'react-icons/hi';


// className={({ isActive }) => `${isActive ? }

const Navbar = () => {
  const links=<>
  <MyLinks href={'/'}><li className='btn btn-ghost '><HiHome /> Home</li></MyLinks>
  <MyLinks href={'/timeline'}><li className='btn btn-ghost '><CiStopwatch /> Timeline</li></MyLinks>
  <MyLinks href={'/stats'} ><li className='btn btn-ghost'><BsGraphUpArrow /> Stats</li></MyLinks>
  </>
  
  return (
    <nav className=" bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">

        <Link href={'/'} className=" hidden md:flex flex-1">
          <Image loading='eager' src={navLogo} alt={navLogo} />
        </Link>
        <div className="flex-none">
          <ul className="flex items-center px-1 gap-5 text-[#64748B]">
           {links}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;