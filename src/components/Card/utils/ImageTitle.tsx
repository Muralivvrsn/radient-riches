import Image from 'next/image'
import { StaticImageData } from "next/image";
interface ImageProps{
  icon:StaticImageData;
  name:string;
}
export default function ImageTitle({icon, name}:ImageProps) {
  return (
    <div className="flex-shrink w-1/5 flex flex-col justify-center items-center">
      <Image src={icon} alt="I" />{" "}
      <div className="text-[13px] text-[#626E79] mt-[10px]">{name}</div>
    </div>
  );
}
