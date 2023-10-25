import "../../index.css";
import { useDraggable } from "react-use-draggable-scroll";
import "react-alice-carousel/lib/alice-carousel.css";

import { useTranslation } from "react-i18next";
import { MutableRefObject, useRef, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import styled, { css } from "styled-components";
import { data } from "../../api/dataCompanyEmployeeImage";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const handleDragStart = (e: any) => e.preventDefault();

const ImageSlider = styled.div<{ $transformImage?: number | undefined }>`
  transition: 0.5s all ease-in;
  transform: translateX(
    ${(props) =>
      props.$transformImage ? `${props.$transformImage * -270}px` : "0px"}
  );
`;

const MainBottom = () => {
  const { t } = useTranslation();
  const [transformImage, setTransformImage] = useState<number>(0);
  console.log("transformImage", transformImage);

  const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    decayRate: 0.95,
    safeDisplacement: 5,
  });

  return (
    <div
      className="w-full h-full xl:flex justify-between xl:px-24 xl:mt-10
     lg:px-8 mb-48 sm:mb-12 sm:px-4 overflow-hidden md:px-12"
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
      <div className="xl:w-[41%] w-full overflow-hidden">
        <div
          className="flex flex-1 gap-4 overflow-hidden overflow-x-scroll w-full"
          {...events}
          ref={ref}
        >
          {data?.map((item, index) => (
            <ImageSlider
              $transformImage={transformImage}
              key={index}
              className="h-full w-full animate-marquee2-infinite"
              onDrag={handleDragStart}
            >
              <div
                className="w-64 h-96 sm:h-[24rem] lg:w-52 sm:w-64 
                bg-gradient-to-r from-[#34B8A3] to-[#1913EA] p-[2px]
                  relative rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  className="w-full h-80 rounded-t-lg 
                 object-cover transition-all ease-in-out
            "
                />
                <div
                  className="text-primary rounded-b-xl 
            bg-secondary pt-2 px-4 pb-[5px]"
                >
                  <p className="font-medium text-lg">{item.title}</p>
                  <p className="font-light text-sm">{item.desc}</p>
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
                prev === data.length - 2 ? prev : prev + 1
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
