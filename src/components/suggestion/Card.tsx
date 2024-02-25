import Image from 'next/image'
import { StaticImageData } from "next/image";

interface Item {
  title: string;
  description: string;
  originalPrice: number;
  discount: number;
  discountPrice: number;
  image: StaticImageData;
}

interface CardProps {
  item: Item;
}

export default function Card({ item }: CardProps) {
  return (
    <div className="flex-grow shadow-custom bg-white m-auto flex justify-center items-center flex-col p-6 md:p-[25px]">
      <Image src={item.image} alt="I" width={150} height={150} className="py-8" />
      <div className="flex flex-col gap-3 text-sm md:text-[14px]">
        <div className="text-[#074786] font-normal flex items-center gap-2 md:gap-[10px]">
          <div className="py-1 md:py-[4px] px-2 md:px-[8px] rounded bg-[#F2F4F7] text-xs md:text-[13px]">
            {item.discount}% off
          </div>
          <div className="py-1 md:py-[4px] px-2 md:px-[8px] rounded bg-[#F2F4F7] text-xs md:text-[13px]">Limited time</div>
        </div>
        <div className='text-[#626E79] font-bold text-center text-sm md:text-[14px]'>{item.title}</div>
        <div className="text-[#626E79] font-normal text-xs md:text-[14px]">{item.description}</div>
        <div className="flex gap-2 md:gap-[10px] items-center">
          <div className='text-[#5C6874] text-lg md:text-[20px] font-normal'>${item.discountPrice}</div>
          <div className="text-[#9FA9B3] text-xs md:text-[14px] line-through">${item.originalPrice}</div>
          <div className="text-[#EF4C5D] text-xs md:text-[13px]">({item.discount}% Off)</div>
        </div>
        <div className="w-full h-12 md:h-[48px] bg-[#1B88F4] rounded-xl mt-3 md:mt-[12px]">
          <button className='w-full h-full flex justify-center items-center text-base md:text-[16px] text-white font-normal'>View</button>
        </div>
      </div>
    </div>
  )
}
