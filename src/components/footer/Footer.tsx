'use client'
import Image from 'next/image'
import dropdownIcon from '../../assessts/dropdown.svg'
export default function Footer(){
    return (
    <div className="mt-[40px] bg-[#212731] h-[452px] px-[200px] text-white flex pt-[54px]">
                <div className="flex-grow flex flex-col gap-[13px]">
                    <div className="text-16px]">Categories</div>
                    <ul className="list-none text-[#B6BDC4] text-[13px] flex flex-col gap-[20px]">
                        <li>Web Builder
                        </li>
                        <li>
                        Hosting
                        </li>
                        <li>Data Center</li>
                        <li>Robotic-Automation</li>
                    </ul>

                </div>
                <div className="flex-grow flex flex-col gap-[13px]">
                        <div className="text-16px]">Contact</div>
                            <ul className="list-none text-[#B6BDC4] text-[13px] flex flex-col gap-[20px]">
                                <li>Contact
                                </li>
                                <li>
                                Hosting
                                </li>
                                <li>Privacy Policy</li>
                                <li>Categories</li>
                                <li>About</li>
                            </ul>
                </div>
            <div className='flex flex-grow text-[#B6BDC4] text-[13px] gap-[8px]  h-fit mt-[50px]'>
                <div>United states</div>
                <Image src={dropdownIcon} alt="D"/>
            </div> 
        </div>

    )
}