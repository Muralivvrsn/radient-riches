"use client";
import Description from "./utils/Description";
import Button from "./utils/Button";
import Tag from "./utils/Tag";
import Rating from "./utils/Rating";
import ImageTitle from "./utils/ImageTitle";
import Id from "./utils/Id";
import Highlights from "./utils/Highlights";
interface HighLightPoint {
  rating: number;
  concept: string;
}
interface Tag {
  content: string;
  image: string;
}

interface Reasons {
  title: string;
}
interface Item {
  id: number;
  tag?: Tag;
  title: string;
  description: string;
  highLightDescription?: string;
  highLightPoints?: HighLightPoint;
  rating: number;
  review: string;
  name: string;
  reasons?: Reasons;
  icon: string;
}

interface CardProps {
  item: Item;
}
export default function Card({ item }: CardProps) {
  return (
    <>
      <div className="flex w-full shadow-custom  pr-[25px] pb-[10px] relative rounded-xl">
        {item.tag && <Tag image={item.tag.image} content={item.tag.content} />}
        <Id id={item.id} />
        <ImageTitle icon={item.icon} name={item.name} />
        <div className="flex flex-col flex-grow gap-[8px] justify-between pt-[20px] px-[20px] leading-normal w-3/5 ">
          <Description title={item.title} description={item.description} />
          <Highlights
            highLightDescription={item.highLightDescription}
            highLightPoints={item.highLightPoints}
            reasons={item.reasons ? item.reasons : null}
          />
        </div>
        <div className="flex flex-col justify-between pb-[10px] items-center w-1/5 ml-[20px]">
          <Rating rating={item.rating} review={item.review} />
          <Button />
        </div>
      </div>
    </>
  );
}
