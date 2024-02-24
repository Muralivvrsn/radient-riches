import Image from 'next/image'
export default function Tag({image,content}) {
  return (
    <div className="absolute w-fit h-fit px-[8px] py-[7px] bg-[#FF7724] text-white flex jusitfy-center items-center gap-[5px] left-[-10px] rounded-r-xl top-[-10px]">
      <Image src={image} />{" "}
      <div className="text-[16px] font-normal">{content}</div>
    </div>
  );
}
