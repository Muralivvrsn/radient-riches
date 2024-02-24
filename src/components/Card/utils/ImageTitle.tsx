import Image from 'next/image'
export default function ImageTitle({icon, name}) {
  return (
    <div className="flex-shrink w-1/5 flex flex-col justify-center items-center">
      <Image src={icon} />{" "}
      <div className="text-[13px] text-[#626E79] mt-[10px]">{name}</div>
    </div>
  );
}
