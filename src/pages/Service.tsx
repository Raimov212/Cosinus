import { useTranslation } from "react-i18next";
import getDataServiceComponent from "../data/dataService";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Service = () => {
  const { t } = useTranslation();
  const data = getDataServiceComponent();

  const [visibleData, setVisibleData] = useState(data.slice(0, 8));

  const handleButtonClick = () => {
    setVisibleData(data);
  };

  return (
    <div
      className="w-full h-full xl:px-24 lg:px-8 bg-[rgba(6, 6, 71, 1)] py-12 sm:mb-12
       sm:px-4 relative "
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="md:px-12 z-50 ">
        <div className="text-primary xl:text-6xl lg:text-4xl scale-[1.01] md:text-4xl sm:text-2xl">
          {t("services.title")}
        </div>
        <div className="xl:w-[650px] text-2xl lg:text-xl scale-[1.02] sm:text-sm font-sans text-secondary">
          {t("services.description")}
        </div>
      </div>
      <div
        className="mt-8 xl:grid xl:justify-between xl:grid-cols-4 lg:grid md:grid lg:grid-cols-2 
        md:grid-cols-2 sm:flex sm:flex-col sm:gap-4 md:px-12 gap-2"
      >
        <div
          className="absolute z-0 w-[1000px] h-[500px] rounded-full bottom-[-5rem] left-[-20%]
         bg_gradient_main_left sm:bottom-[10%] lg:top-[50%] "
        ></div>
        {visibleData?.map((item, index) => (
          <div key={index} className="sm:w-80 md:w-full z-10 mx-4 mb-6">
            <div className="flex">
              <div
                className="border-l-8 sm:border-l-[6px] xl:text-4xl sm:text-xl lg:text-3xl
           h-12 sm:h-10  border-secondary"
              ></div>
              <div className="pl-4">
                <h1 className=" text-primary xl:text-2xl sm:pl-3 font-medium md:text-2xl">
                  {item.title}
                </h1>
                <div
                  className="text-secondary md:text-xl  sm:pl-2 lg:pl-3 
                       sm:text-sm font-normal"
                >
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
        {visibleData.length < data.length && (
          <div
            className="cursor-pointer flex justify-center items-center gap-4 xl:mt-16 text-primary
            w-72 h-12 sm:w-full sm:h-9 sm:mt-4 bg-secondary z-10 xl:ml-[30rem] lg:ml-[12rem] md:ml-[20rem]"
            onClick={handleButtonClick}
          >
            <button>{t("portfolio.button")}</button>
            <div className="text-xl">
              <FiArrowUpRight />
            </div>
          </div>
        )}
      </div>
      <div
        className="absolute z-0 w-[500px] h-[800px] rounded-full top-[0%] right-[10%] 
        bg_gradient_main_left lg:hidden md:top-[-70%] sm:top-[10%]"
      ></div>
    </div>
  );
};

export default Service;
