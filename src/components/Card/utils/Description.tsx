interface DescriptionProps {
    title: string;
    description: string;
  }
export default function Description({title, description}:DescriptionProps) {
  return (
    <div className="flex flex-col text-[16px]">
      <div className="font-bold text-[#2C384A]">
        {title}-{" "}
        <span className="font-normal text-[#4B5665]">{description}</span>
      </div>
    </div>
  );
}
