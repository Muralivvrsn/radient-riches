"use client";
import Image from "next/image";
import doneIcon from "../../assets/done.svg";
import noteIcon from "../../assets/note.svg";
import dropdownIcon from "../../assets/dropdown.svg";

export default function Filter() {
  return (
    <div className="w-full border-t-[2px] mt-[16px] py-[14px] border-b-[2px] flex flex-wrap gap-4 sm:gap-[20px] text-[14px] text-[#4B5666] justify-between">
      <div className="flex gap-2 sm:gap-[8px] items-center">
        <Image src={doneIcon} alt="Done icon" width={20} height={20} />
        <div>Last Updated</div>
        <div>-</div>
        <div>February 22, 2020</div>
      </div>
      <div className="flex gap-2 sm:gap-[8px] items-center">
        <Image src={noteIcon} alt="Note icon" width={20} height={20} />
        <div>Advertising Disclosure</div>
      </div>
      <div className="flex gap-2 sm:gap-[8px] items-center cursor-pointer">
        <div>Top Relevant</div>
        <Image src={dropdownIcon} alt="Dropdown icon" width={20} height={20} />
      </div>
    </div>
  );
}
