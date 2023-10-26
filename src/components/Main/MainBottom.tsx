import "../../index.css";
import { useDraggable } from "react-use-draggable-scroll";
import "react-alice-carousel/lib/alice-carousel.css";

import { useTranslation } from "react-i18next";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import styled, { css } from "styled-components";
import { data } from "../../data/dataCompanyEmployeeImage";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { devices } from "../../assets/screen/screen";

const handleDragStart = (e: any) => e.preventDefault();

const ImageSlider = styled.div<{ $transformImage?: number | undefined }>`
  transition: 0.5s all ease-in;
  @media ${devices?.mobileS} {
    transform: translateX(
      ${(props) =>
        props.$transformImage ? `${props.$transformImage * -115}%` : "0px"}
    );
  }
  @media ${devices?.mobileM} {
    transform: translateX(
      ${(props) =>
        props.$transformImage ? `${props.$transformImage * -110}%` : "0px"}
    );
  }
  @media ${devices?.mobileL} {
    transform: translateX(
      ${(props) =>
        props.$transformImage ? `${props.$transformImage * -105}%` : "0px"}
    );
  }
  @media ${devices?.tablet} {
    transform: translateX(
      ${(props) =>
        props.$transformImage ? `${props.$transformImage * -90}%` : "0px"}
    );
  }
  @media ${devices?.laptop} {
    transform: translateX(
      ${(props) =>
        props.$transformImage ? `${props.$transformImage * -85}%` : "0px"}
    );
  }
  @media ${devices?.laptopL} {
    transform: translateX(
      ${(props) =>
        props.$transformImage ? `${props.$transformImage * -100}%` : "0px"}
    );
    /* animation: scrollImage 8s ease-in infinite;
    @keyframes scrollImage {
      from {
        transform: translateX(
          ${(props) =>
      props.$transformImage ? `${props.$transformImage * -100}%` : "0px"}
        );
      }
      to {
        transform: translateX(
          ${(props) =>
      props.$transformImage ? `${(props.$transformImage + 1) * -100}%` : "0px"}
        );
      }
    } */
  }
  @media ${devices?.desktop} {
    transform: translateX(
      ${(props) =>
        props.$transformImage ? `${props.$transformImage * -90}%` : "0px"}
    );
  }
`;

const MainBottom = () => {
  const { t } = useTranslation();
  const [transformImage, setTransformImage] = useState<number>(0);
  console.log("transformImage", transformImage);

  // const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLInputElement>;
  // const { events } = useDraggable(ref, {
  //   decayRate: 0.95,
  //   safeDisplacement: 5,
  // });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (transformImage === data.length - 2) {
        setTransformImage(0);
      } else {
        setTransformImage(transformImage + 1);
      }
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [transformImage]);

  return (
    <div
      className="w-full h-full xl:flex justify-between xl:px-24 xl:mt-10
     lg:px-8 mb-48 sm:mb-12 sm:px-4 overflow-hidden md:px-12  "
    >
      <div className="w-full flex flex-1 flex-col gap-10 sm:gap-2 lg:mb-10 sm:mb-10">
        <div className="xl:w-[500px]">
          <h1 className="text-primary text-6xl sm:text-2xl font-bold">
            {t("mainBottom.title")}
          </h1>
          <span className="text-secondary xl:text-xl md:text-xl font-sans">
            {t("mainBottom.description")}
          </span>
        </div>
        <div>
          <p className="text-[6rem]  font-bold text-[#3C4BDC]">15+</p>
          <p className="text-primary xl:text-2xl md:text-2xl mb-2 lg:text-xl sm:text-lg  font-sans">
            {t("mainBottom.work")}
          </p>
        </div>
      </div>
      <div className="flex-1 w-full overflow-hidden relative top-0 right-0 z-10">
        <div className="flex flex-1 gap-4 overflow-hidden w-full">
          {data?.map((item) => (
            <ImageSlider
              $transformImage={transformImage}
              key={item.id}
              className="h-full w-full animate-marquee2-infinite"
              onDrag={handleDragStart}
            >
              {/* ${item?.id === transformImage + 1 ? "sm:w-44" : "sm:w-32"} ' */}
              <div
                className={`w-64 h-96 sm:w-40 
                 lg:w-52  
                 bg-gradient-to-r from-[#34B8A3] to-[#1913EA] p-[2px]
                  relative rounded-xl overflow-hidden cursor-pointer`}
              >
                <img
                  src={item.image}
                  className="w-full h-80 rounded-t-lg 
                 object-cover transition-all ease-in-out
            "
                />
                <div
                  className="text-primary rounded-b-xl 
            bg-secondary pt-2 px-4 pb-[5px] sm:pb-[8px]"
                >
                  <p className="font-medium text-lg sm:text-base">
                    {item.title}
                  </p>
                  <p className="font-light text-sm sm:text-xs">{item.desc}</p>
                </div>
              </div>
            </ImageSlider>
          ))}
        </div>
        <div className="flex gap-4 mt-4 ml-8 justify-end ">
          <button
            onClick={() =>
              setTransformImage((prev) => (prev === 0 ? prev : prev - 1))
            }
            className=" border-1
            bg-gradient-to-r from-[#34B8A3] to-[#1913EA] p-[0.8px]
              relative rounded-sm"
          >
            <div
              className={` ${
                transformImage == 0 ? "bg-primary " : "bg-secondary"
              }  flex items-center justify-center text-white rounded-sm w-8 h-8  `}
            >
              <FaChevronLeft />
            </div>
          </button>
          <button
            onClick={() =>
              setTransformImage((prev) =>
                prev === data.length - 2 ? 0 : prev + 1
              )
            }
            className="border-1 
            bg-gradient-to-r from-[#34B8A3] to-[#1913EA] p-[0.8px]
              relative rounded-sm "
          >
            <div
              className={`${
                transformImage == data.length - 2
                  ? "bg-primary "
                  : "bg-secondary"
              } flex items-center justify-center text-white rounded-sm w-8 h-8 `}
            >
              <FaChevronRight />
            </div>
          </button>
        </div>
      </div>
      <a href="#main">
        <div
          className="fixed bottom-10 z-50 right-10 text-4xl text-[#3C4BDC] cursor-pointer 
          hover:transition duration-0 hover:scale-125 hover:duration-300 ease-in-out"
        >
          <BsArrowUpCircle />
        </div>
      </a>
    </div>
  );
};

export default MainBottom;
