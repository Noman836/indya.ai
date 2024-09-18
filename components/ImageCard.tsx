import React from "react";
import Image from "next/image";

interface ImageCardProps {
  backgroundImage: string;
  imageSrc?: string;
  imageSrc2?: string;
  title: string;
  description: string;
  className?: string;
  imageSrcStyle1?: string;
  imageSrcStyle2?: string;
  backgroundMainImage:string;
}
const ImageCard: React.FC<ImageCardProps> = ({
  backgroundImage,
  imageSrc,
  imageSrc2,
  title,
  description,
  className = "",
  imageSrcStyle1 = "",
  imageSrcStyle2 = "",
  backgroundMainImage = ""
}) => {
  return (
    <main
      className={`border border-boxBorderColor rounded-[30px] w-[822px] h-[447px] relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `url(${backgroundMainImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat'
      }}
    >
      <div className="p-3 rounded-t-[30px] relative z-10 mb-2">
        <h1 className="text-primary font-bold leading-[36px] text-[24px] pt-5">
          {title}
        </h1>
        <p className="text-primary font-[400] leading-[24px] text-[16px] pt-3">
          {description}
        </p>
      </div>
      <div className="w-full flex justify-center overflow-hidden"
       style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:'no-repeat'
      }}
      >
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={title}
            width={550}
            height={568}
            className={`${imageSrcStyle1}`}
          />
        )}
        {imageSrc2 && (
          <Image
            src={imageSrc2}
            alt={title}
            width={550}
            height={250}
            className={`${imageSrcStyle2}`}
          />
        )}
      </div>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center rounded-[30px]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
    </main>
  );
};

export default ImageCard;
