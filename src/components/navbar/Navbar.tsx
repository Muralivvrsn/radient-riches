'use client';
import { useState } from 'react';
import SearchIcon from '../../assessts/search.svg';
import Image from 'next/image';

export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex h-[64px] items-center justify-center bg-[#212731]">
      <ul className="flex w-fit h-fit list-none gap-[50px] text-[14px] text-[#D1D6DA] items-center justify-center">
        <li className="h-[37px] w-[258px] relative">
          {!isFocused && (
            <Image
              src={SearchIcon}
              alt="Search"
              className="absolute z-50 top-[5px] left-[9px]"
             
            />
          )}
          <input
            type="text"
            id="search"
            className="w-full h-full rounded text-black px-[2px] pl-[10px]" 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </li>
        <li className="leading-5">Categories</li>
        <li className="leading-5">Website Builders</li>
        <li className="leading-5">Today's deals</li>
      </ul>
    </div>
  );
}
