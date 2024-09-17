import React from "react";
interface CardProps {
  title: string;
  description: string;
}
const MiniCard = ({ title, description }: CardProps) => {
  return (
    <>
      <main className="border border-boxBorderColor rounded-2xl w-[281px] h-[216px]">
        <div className="p-3 flex flex-col gap-10 items-stretch">
          <div className="">
            <h1 className="text-primary font-bold leading-[36px] text-[16px] mb-2">
              {title}
            </h1>
            <p className="text-primary pr-5 font-[400] leading-[24px] text-[16px]">
              {description}
            </p>
          </div>
          <div className="">
            <button className="text-primary mt-3 cursor-pointer">Read More</button>

            </div>
        </div>
      </main>
    </>
  );
};

export default MiniCard;
