import Image from 'next/image'
import { StaticImageData } from "next/image";

interface ImageProps{
  icon: StaticImageData;
  name: string;
}

export default function ImageTitle({ icon, name }: ImageProps) {
  return (
    <div className="flex-shrink flex flex-col justify-center items-center w-full sm:w-1/4 md:w-1/5">
      <Image src={icon} alt={name} />
      <div className="text-[13px] text-[#626E79] mt-[10px]">{name}</div>
    </div>
  );
}
