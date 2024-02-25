import showmoreIcon from "../../../assets/showmore.svg"; 
import doneIcon from "../../../assets/done1.svg";
import Image from "next/image";

interface HighLightPoint {
  rating: number;
  concept: string;
}

interface Reasons {
  title: string;
  reasons: string[];
}

interface HighlightsProps {
  highLightDescription?: string;
  highLightPoints?: HighLightPoint[];
  reasons?: Reasons;
}

export default function Highlights({
  highLightDescription,
  highLightPoints,
  reasons,
}: HighlightsProps) {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 md:gap-[8px]">
      <div className="text-sm md:text-base font-bold text-[#2C384A]">
        Main highlights
      </div>
      {highLightDescription && (
        <p className="text-sm md:text-base font-normal text-[#4B5665] ml-4 sm:ml-5 md:ml-[18px]">
          {highLightDescription}
        </p>
      )}
      {highLightPoints && (
        <ul className="bg-[#FFF4ED] w-full p-2 sm:p-3 md:p-[10px] flex flex-col gap-2 sm:gap-3 md:gap-[12px] rounded ml-4 sm:ml-5 md:ml-[18px]">
          {highLightPoints.map((point, index) => (
            <li key={index} className="flex gap-2 sm:gap-3 md:gap-[10px] items-center">
              <span className="bg-[#FFFFFF] flex justify-center items-center rounded w-10 sm:w-12 md:w-[40px] h-7 sm:h-8 md:h-[28px] text-[#1B88F4] text-sm md:text-base">
                {point.rating}
              </span>
              <span className="text-xs sm:text-sm md:text-[15px] text-[#4B5665]">
                {point.concept}
              </span>
            </li>
          ))}
        </ul>
      )}
      {reasons && (
        <div>
          <div className="text-sm md:text-base text-[#2C384A] my-2 sm:my-3 md:my-[7px]">
            {reasons.title}
          </div>
          <ul className="grid gap-2 sm:gap-3 md:gap-[5px] text-xs sm:text-sm md:text-[15px] text-[#4B5665] items-center">
            {reasons.reasons.map((item, index) => (
              <li className="flex gap-2 sm:gap-3 md:gap-[8px]" key={index}>
                <Image src={doneIcon} alt="D" width={20} height={20} /> {/* Adjust Image size as needed */}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="text-[#1B88F4] mt-5 sm:mt-6 md:mt-[20px] flex justify-start items-center gap-1 sm:gap-2 md:gap-[5px]">
        <div>Show more</div>
        <Image src={showmoreIcon} alt="S" width={20} height={20} /> {/* Adjust Image size as needed */}
      </div>
    </div>
  );
}
