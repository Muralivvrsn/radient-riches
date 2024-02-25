interface IdProps {
  id: number;
}

export default function Id({ id }: IdProps) {
  return (
    <div className="absolute w-11 h-11 sm:w-14 sm:h-14 rounded-full flex justify-center items-center top-10 sm:top-12 border border-[1px] border-[#E1E4E6] left-[-23px] z-50 text-sm sm:text-base">
      {id}
    </div>
  );
}
