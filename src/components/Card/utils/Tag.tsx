import Image from 'next/image'
import { StaticImageData } from "next/image";

interface TagProps{
    image: StaticImageData;
    content: string;
}

export default function Tag({ image, content }: TagProps) {
  return (
    <div className="absolute w-fit h-fit px-[8px] py-[7px] bg-[#FF7724] text-white flex justify-center items-center gap-[5px] left-[-10px] rounded-r-xl top-[-10px]">
      <Image src={image} alt="Tag Icon" width={20} height={20} />
      <div className="text-[16px] font-normal">{content}</div>
    </div>
  );
}
