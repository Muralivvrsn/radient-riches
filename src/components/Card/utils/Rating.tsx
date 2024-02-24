import Image from 'next/image'
import StarRating from './../../main/StarRating';
import noteIcon from "../../../assessts/note1.svg";
export default function Rating({rating,review}) {
  return (
    <div className="text-[#074786] w-[135px] h-[118px] bg-[#F3F9FF] flex flex-col justify-around items-center relative rounded-b-xl ">
      <Image className="absolute top-[5px] right-[30%]" src={noteIcon} alt="N" />
      <div className="text-[32px]">{rating}</div>
      <div className="text-[14px] flex flex-col items-center justify-center">
        <div className="">{review}</div>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}
