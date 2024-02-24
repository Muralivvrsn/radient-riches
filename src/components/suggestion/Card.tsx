
import Image from 'next/image'
 interface Item {
    title: string;
    description: string;
    originalPrice:number;
    discount:number;
    discountPrice:number;
    image:string;
  }
  
  interface CardProps {
    item: Item;
  }
export default function Card({item}:CardProps){

    return(
        <div className="flex-grow border flex justify-center items-center flex-col p-[25px]">
            <Image src={item.image} className="py-[30px]"/>
            <div className="flex flex-col gap-[12px] text-[14px]">
                <div className="text-[#074786] text-[14px] font-normal flex items-center gap-[10px]">
                    <div className="py-[4px]  px-[8px] rounded bg-[#F2F4F7] text-[13px]">
                        {item.discount}% off
                    </div>
                    <div className="py-[4px] px-[8px]  rounded bg-[#F2F4F7]">Limited time</div>
                </div>
                <div className='text-[#626E79] font-bold text-center'>{item.title}</div>
                <div className="text-[#626E79] font-normal">{item.description}</div>
                <div className="flex gap-[10px]  items-center">
                <div className='text-[#5C6874] text-[20px] font-normal'>${item.discountPrice}</div>
                <div className="text-[#9FA9B3] text-[14px] font-normal">${item.originalPrice}</div>
                <div className="text-[#EF4C5D] text-[13px] font-normal">({item.discount}% Off)
                </div>
                </div>
                <div className="w-full h-[48px] bg-[#1B88F4] rounded-xl mt-[12px]">
            <button className='w-full h-full flex justify-center items-center text-[16px] text-white font-normal'>View</button>
        </div>
            </div>
            
        </div>
    )
}