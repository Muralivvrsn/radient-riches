"use client";
import Card from "./Card";
import Icon from "../../assets/cupImage.png"; 

export default function Suggestion() {
  const data = [
    {
      title: "Webbuilder 1",
      originalPrice: 49.96,
      discount: 20,
      discountPrice: 39.96,
      description: "Computer Modern classic with Wix support",
      image: Icon,
    },
    {
      title: "Webbuilder 2",
      originalPrice: 59.99,
      discount: 15,
      discountPrice: 50.99,
      description: "Enhanced design features with template variety",
      image: Icon,
    },
    {
      title: "Webbuilder 3",
      originalPrice: 69.99,
      discount: 10,
      discountPrice: 62.99,
      description: "Advanced builder for professionals and businesses",
      image: Icon,
    },
  ];

  return (
    <div className="w-full mt-[80px]">
      <div className="text-[24px] w-full md:text-center sm:text-center sm:text-[28px] md:text-[32px]">Related deals you might like</div>
      <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-[25px] mt-[35px] items-center justify-center md:justify-start">
        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
      <div className="mt-[37px] pl-[0px] md:pl-0 flex flex-col sm:flex-row md:flex-row justify-between items-center text-center md:text-left">
        <div className="text-[#5C6874] text-[24px] sm:text-[28px] md:text-[32px] mb-4 md:mb-0">
          Sign up and get exclusive special deals
        </div>
        <div className="flex h-[52px] w-full md:w-auto">
          <input type="email" placeholder="Your email" className="w-full md:w-[348px] px-4 rounded-l-xl" />
          <button className="rounded-r-xl px-[10px] bg-[#1B88F4] w-[100px] text-white text-[14px] h-full flex justify-center items-center">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
