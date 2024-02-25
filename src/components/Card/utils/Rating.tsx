import Image from "next/image";
import StarRating from "./../../main/StarRating";
import noteIcon from "../../../assets/note1.svg"; 

interface RatingProps {
  rating: number;
  review: string;
}

export default function Rating({ rating, review }: RatingProps) {
  const formattedRating = rating.toFixed(1);
  return (
    <div className="text-[#074786] w-full sm:w-[135px] h-auto sm:h-[118px] bg-[#F3F9FF] flex flex-col justify-around items-center relative rounded-b-xl p-4 sm:p-0">
      <Image
        className="absolute top-[5px] right-[30%] sm:right-[30%]"
        src={noteIcon}
        alt="Note"
      />
      <div className="text-[24px] sm:text-[32px]">{formattedRating}</div>
      <div className="text-[12px] sm:text-[14px] flex flex-col items-center justify-center">
        <div>{review}</div>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}
