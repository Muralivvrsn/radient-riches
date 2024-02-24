import showmoreIcon from "../../../assessts/showmore.svg";
import doneIcon from "../../../assessts/done1.svg";
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
  highLightPoints?: HighLightPoint[] ;
  reasons?: Reasons ;
}
export default function Highlights({
  highLightDescription,
  highLightPoints,
  reasons,
}: HighlightsProps) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="text-[16px] font-bold text-[#2C384A]">
        Main highlights
      </div>
      {highLightDescription && (
        <p className="text-[16px] font-normal text-[#4B5665] ml-[18px]">
          {highLightDescription}
        </p>
      )}
      {highLightPoints && (
        <ul className="bg-[#FFF4ED] w-full p-[10px] flex flex-col gap-[12px] rounded ml-[18px]">
          {highLightPoints.map((point, index) => (
            <li key={index} className="flex gap-[10px] items-center">
              <span className="bg-[#FFFFFF] flex justify-center items-center rounded w-[40px] h-[28px] text-[#1B88F4] text-[16px]">
                {point.rating}
              </span>
              <span className="text-[15px] text-[#4B5665]">
                {point.concept}
              </span>
            </li>
          ))}
        </ul>
      )}
      {reasons && (
        <div>
          <div className="text-[16px] text-[#2C384A] my-[7px]">
            {reasons.title}
          </div>
          <ul className="grid gap-[5px] text-[15px] text-[#4B5665] items-center">
            {reasons.reasons.map((item, index) => (
              <li className="flex gap-[8px]" key={index}>
                <Image src={doneIcon} alt="D" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="text-[#1B88F4] mt-[20px] flex justify-start items-center gap-[5px]">
        <div>Show more</div>
        <Image src={showmoreIcon} alt="S" />
      </div>
    </div>
  );
}
