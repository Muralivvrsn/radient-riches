"use client";
import Description from "./utils/Description";
import Button from "./utils/Button";
import Tag from "./utils/Tag";
import Rating from "./utils/Rating";
import ImageTitle from "./utils/ImageTitle";
import { StaticImageData } from "next/image";
import Id from "./utils/Id";
import Highlights from "./utils/Highlights";
interface HighLightPoint {
  rating: number;
  concept: string;
}
interface Tag {
  content: string;
  image: StaticImageData;
}

interface Reasons {
  title: string;
  reasons: string[];
}
interface Item {
  id: number;
  tag?: Tag;
  title: string;
  description: string;
  highLightDescription?: string;
  highLightPoints?: HighLightPoint[];
  rating: number;
  review: string;
  name: string;
  reasons?: Reasons;
  icon: StaticImageData;
}

interface CardProps {
  item: Item;
}
export default function Card({ item }: CardProps) {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full shadow-custom pr-4 sm:pr-6 md:pr-[25px] pb-2 sm:pb-4 md:pb-[10px] relative rounded-xl">
        {item.tag && <Tag image={item.tag.image} content={item.tag.content} />}
        <Id id={item.id} />
        <ImageTitle icon={item.icon} name={item.name} />
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-[8px] justify-between pt-4 sm:pt-[15px] md:pt-[20px] px-4 sm:px-5 md:px-[20px] leading-normal w-full md:w-3/5">
          <Description title={item.title} description={item.description} />
          <Highlights
            highLightDescription={item.highLightDescription}
            highLightPoints={item.highLightPoints}
            reasons={item.reasons}
          />
        </div>
        <div className="flex flex-col justify-between pb-2 sm:pb-4 md:pb-[10px] w-full sm:w-[200px] md:w-[232px] items-center mx-4 sm:mx-0 sm:ml-[20px]">
          <Rating rating={item.rating} review={item.review} />
          <Button />
        </div>
      </div>
    </>
  );
}
