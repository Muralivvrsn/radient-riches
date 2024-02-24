interface IdProps{
    id:number;
}
export default function Id({id}:IdProps) {
  return (
    <div className="absolute w-[44px] h-[44px] rounded-full justify-center items-center flex top-[40px] border border-[1px] border-[#E1E4E6] left-[-23px] z-50">
      {id}
    </div>
  );
}
