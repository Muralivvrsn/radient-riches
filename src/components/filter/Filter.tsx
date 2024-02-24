'use client'
import Image from 'next/image';
import doneIcon from '../../assessts/done.svg'
import noteIcon from '../../assessts/note.svg'
import dropdownIcon from '../../assessts/dropdown.svg'
export default function Filter(){
    return (
    <div className="w-full border-t-[2px] mt-[16px] py-[14px] border-b-[2px] flex gap-[20px] text-[14px] text-[#4B5666] ">
        <div className="flex gap-[8px] items-center">
            <Image src={doneIcon} alt="D" />
            <div>Last Updated</div>
            <div>-</div>
            <div>February 22, 2020</div>
        </div>
        <div className="flex gap-[8px] items-center">
            <Image src={noteIcon} alt="D"/>
            <div>Advertising Disclosure</div>
        </div>
        <div className="flex gap-[8px] ml-auto items-center">
            <div>Top Relevant</div>
            <Image src={dropdownIcon} alt="D"/>
        </div>
    </div>
    )
}