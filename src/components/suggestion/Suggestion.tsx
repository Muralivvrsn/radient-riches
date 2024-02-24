"use client";
import Card from "./Card";
import Icon from "../../assessts/cupImage.png";
export default function Suggestion() {
  const data = [
    {
      title: "Webbuilder 1",
      originalPrice: 49.96,
      discount: 20,
      discountPrice: 39.96,
      description: "Computer  Modern clasic with wix support",
      image: Icon,
    },
    {
      title: "Webbuilder 1",
      originalPrice: 49.96,
      discount: 20,
      discountPrice: 39.96,
      description: "Computer  Modern clasic with wix support",
      image: Icon,
    },
    {
      title: "Webbuilder 1",
      originalPrice: 49.96,
      discount: 20,
      discountPrice: 39.96,
      description: "Computer  Modern clasic with wix support",
      image: Icon,
    },
  ];
  return (
    <div className="w-full mt-[80px]">
      <div className="text-[32px]">Related deals you might like for</div>
      <div className="flex gap-[22px] mt-[35px]">
        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
      <div className="mt-[37px] pl-[28px] flex justify-between items-center">
        <div className="text-[#5C6874] w-[398px] text-[32px]">
          Sign up and get exclusive special deals
        </div>
        <div className="flex h-[52px]">
          <input type="email" className="w-[348px]" />
          <button className="rounded-r-xl px-[20px] bg-[#1B88F4] text-white text-[14px] h-full flex justify-center items-center">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
