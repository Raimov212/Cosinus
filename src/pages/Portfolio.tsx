import { useTranslation } from "react-i18next";
// import { FiArrowUpRight } from "react-icons/fi";
// import { useState } from "react";
import Barbershop from "../assets/portfolio/barbershop.png";
import Shifo24MobileApp from "../assets/portfolio/shifo24mobile.png";
import Shifo24WebSite from "../assets/portfolio/shifo24website.png";
import Dostavka from "../assets/portfolio/dostavka.png";

interface PortfolioData {
  image: string;
  description: string;
}

const Portfolio = () => {
  const { t } = useTranslation();

  const data: PortfolioData[] = [
    {
      image: Dostavka,
      description: t("portfolio.designTitle1"),
    },
    {
      image: Shifo24MobileApp,
      description: t("portfolio.designTitle2"),
    },
    {
      image: Shifo24WebSite,
      description: t("portfolio.designTitle3"),
    },
    {
      image: Barbershop,
      description: t("portfolio.designTitle4"),
    },
  ];

  // const [visibleImages, setVisibleImages] = useState(data.slice(0, 2));

  // const handleButtonClick = () => {
  //   setVisibleImages(data);
  // };

  return (
    <div
      className="xl:px-24 lg:px-6 mb-14 transition-all ease-in sm:mb-12 sm:px-4 md:px-12 "
      id="portfolio"
    >
      <div className="mt-24 mb-14 xl:w-[110vh] sm:mt-0 sm:mb-6">
        <div className="xl:text-6xl lg:text-4xl sm:text-2xl text-primary md:text-4xl">
          {t("portfolio.title")}
        </div>
        <div className="text-2xl text-secondary sm:text-sm">
          {t("portfolio.description")}
        </div>
      </div>
      <div className="grid place-items-center  relative">
        <div className="absolute z-0 w-[1500px] h-[1500px] rounded-full scale-[.6] bottom-[0%] left-[0%] bg_gradient_portfolio"></div>
        <div
          className="grid grid-cols-2 place-items-center z-10
             xl:gap-16 lg:gap-6 sm:flex sm:flex-col md:gap-4 sm:gap-4"
        >
          {data.map((item, index) => (
            <div key={index} className="xl:pb-16 lg:mb-2 w-full h-full">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 pt-0.5
                            px-0.5 rounded-t-3xl xl:w-full xl:h-full"
              >
                <img
                  src={item.image}
                  alt="portfolio"
                  className="w-full h-full object-cover rounded-t-3xl "
                />
              </div>
              <span className="text-primary xl:text-3xl lg:text-2xl sm:text-xl md:text-2xl md:mt-2">
                {item.description}
              </span>
            </div>
          ))}
        </div>
        {/* {visibleImages.length < data.length && (
          <div
            className="cursor-pointer flex justify-center items-center gap-4 xl:mt-16 text-primary
            w-72 h-12 sm:w-full sm:h-9 sm:mt-4 bg-secondary"
            onClick={handleButtonClick}
          >
            <button>{t("portfolio.button")}</button>
            <div className="text-xl">
              <FiArrowUpRight />
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Portfolio;
