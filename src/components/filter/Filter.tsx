"use client";
import Image from "next/image";
import doneIcon from "../../assets/done.svg";
import noteIcon from "../../assets/note.svg";
import dropdownIcon from "../../assets/dropdown.svg";

export default function Filter() {
  return (
    <div className="w-full border-t-[2px] mt-[16px] py-2 sm:py-[14px] border-b-[2px] flex flex-wrap gap-2 sm:gap-[20px] text-xs sm:text-[14px] text-[#4B5666] justify-between">
      <div className="flex gap-1 sm:gap-[8px] items-center">
        <Image src={doneIcon} alt="Done icon" width={16} height={16}  />
        <div className="hidden sm:block">Last Updated</div>
        <div className="hidden sm:block">-</div>
        <div>February 22, 2020</div>
      </div>
      <div className="flex gap-1 sm:gap-[8px] items-center">
        <Image src={noteIcon} alt="Note icon" width={16} height={16}  />
        <div>Advertising Disclosure</div>
      </div>
      <div className="flex gap-1 sm:gap-[8px] items-center cursor-pointer">
        <div>Top Relevant</div>
        <Image src={dropdownIcon} alt="Dropdown icon" width={16} height={16}  />
      </div>
    </div>
  );
}
