'use client'
import Image from 'next/image'
import dropdownIcon from '../../assets/dropdown.svg'

export default function Footer() {
  return (
    <div className="mt-[40px] bg-[#212731] h-auto py-[54px] px-4 sm:px-10 md:px-20 lg:px-[200px] text-white flex flex-col lg:flex-row justify-between">
      <div className="flex-grow flex flex-col gap-[13px]">
        <div className="text-[16px]">Categories</div>
        <ul className="list-none text-[#B6BDC4] text-[13px] flex flex-col gap-[20px]">
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>
      <div className="flex-grow flex flex-col gap-[13px] mt-10 lg:mt-0">
        <div className="text-[16px]">Contact</div>
        <ul className="list-none text-[#B6BDC4] text-[13px] flex flex-col gap-[20px]">
          <li>Contact</li>
          <li>Hosting</li>
          <li>Privacy Policy</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div className='flex flex-grow text-[#B6BDC4] text-[13px] gap-[8px] items-center mt-10 lg:mt-[50px]'>
        <div>United States</div>
        <Image src={dropdownIcon} alt="Dropdown" width={20} height={20} />
      </div>
    </div>
  )
}
