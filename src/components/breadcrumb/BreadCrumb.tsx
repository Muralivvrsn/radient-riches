'use client';
import Image from 'next/image'
import { useState } from 'react';
import arrowIcon from '../../assets/arrow.svg'
export default function BreadCrumb() {
  const [list, setList] = useState(["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting5"]);
  return (
    <div className="flex items-center gap-[10px] text-[14px] text-[#727D87]">
      {list.map((item, index) => (
        <div key={index} className="flex items-center gap-[10px]">
          {index !== 0 && (
            <Image src={arrowIcon} alt="f" />
          )}
          <span className='cursor-pointer'>{item}</span>
        </div>
      ))}
    </div>
  );
}
