"use client";
import Card from "../Card/Card";
import icon from "../../assessts/cupImage.png";
import diamondIcon from "../../assessts/diamond.svg";
import cupIcon from "../../assessts/cup.svg";
export default function Main() {
  const data = [
    {
      id: 1,
      name: "Builder 1",
      tag: {
        content: "Best Choice",
        image: cupIcon,
      },
      icon: icon,
      title: "WixPro 72-Inch Responsive Website Builder",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highLightDescription:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: 9.8,
      review: "Exceptional",
    },
    {
      id: 2,
      name: "Builder 2",
      tag: {
        content: "Best Value",
        image: diamondIcon,
      },
      icon: icon,
      title: "SiteCraft 68-Inch Ultimate Web Design Studio",
      description:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      highLightDescription:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      rating: 9.5,
      review: "Excellent",
    },
    {
      id: 3,
      name: "Builder 3",
      title: "WixPro 72-Inch Responsive Website Builder",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highLightDescription:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      rating: 9.8,
      icon: icon,
      review: "Exceptional",
    },
    {
      id: 4,
      name: "CDK",
      icon: icon,
      title: "CDK Resposive Builder",
      description:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      highLightPoints: [
        {
          rating: 9.9,
          concept: "Building Responsive",
        },
        {
          rating: 8.9,
          concept: "Cool",
        },
        {
          rating: 8.9,
          concept: "Docs",
        },
      ],
      rating: 9.1,
      review: "Very good",
      reasons: {
        title: "Why we love it",
        reasons: ["Documentation", "Easy Use", "Out Of Box"],
      },
    },
  ];
  return (
    <div className="flex flex-col w-full flex-wrap gap-[50px] justify-center mt-[40px]">
      {data.map((item, index) => (
        <Card item={item} key={index} />
      ))}
    </div>
  );
}
