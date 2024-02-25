'use client';
import { useState } from 'react';
import SearchIcon from '../../assets/search.svg'; 
import Image from 'next/image';

export default function Navbar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex h-[64px] items-center justify-center bg-[#212731] px-4 sm:px-10 md:px-20">
      <ul className="flex w-full max-w-4xl list-none gap-4 sm:gap-8 md:gap-[50px] text-[14px] text-[#D1D6DA] items-center justify-between sm:justify-center">
        <li className="h-[37px] w-full sm:w-[258px] relative">
          {!isFocused && (
            <div className="absolute z-50 top-[8px] left-4 sm:left-[9px]">
              <Image
                src={SearchIcon}
                alt="Search"
                width={20}
                height={20}
              />
            </div>
          )}
          <input
            type="text"
            id="search"
            className="w-full h-full rounded text-black px-1 sm:px-[2px] sm:pl-[5px] placeholder-[#D1D6DA]" 
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </li>
        <li className="hidden sm:block leading-5">Categories</li>
        <li className="hidden sm:block leading-5">Website Builders</li>
        <li className="hidden sm:block leading-5">Today's deals</li>
      </ul>
    </div>
  );
}
