import { useTranslation } from "react-i18next";
import Cosinus from "../assets/portfolio/cosinus.png";
import Toqimachilik from "../assets/portfolio/toqimachilik.png";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";

interface PortfolioData {
  image: string;
  description: string;
}

const Portfolio = () => {
  const { t } = useTranslation();

  const data: PortfolioData[] = [
    {
      image: Cosinus,
      description: t("portfolio.designName"),
    },
    {
      image: Toqimachilik,
      description: t("portfolio.designName2"),
    },
    {
      image: Cosinus,
      description: t("portfolio.designName"),
    },
    {
      image: Toqimachilik,
      description: t("portfolio.designName2"),
    },
    {
      image: Cosinus,
      description: t("portfolio.designName"),
    },
    {
      image: Toqimachilik,
      description: t("portfolio.designName2"),
    },
    {
      image: Cosinus,
      description: t("portfolio.designName"),
    },
    {
      image: Toqimachilik,
      description: t("portfolio.designName2"),
    },
    {
      image: Cosinus,
      description: t("portfolio.designName"),
    },
    {
      image: Toqimachilik,
      description: t("portfolio.designName2"),
    },
  ];

  const [visibleImages, setVisibleImages] = useState(data.slice(0, 2));

  const handleButtonClick = () => {
    setVisibleImages(data);
  };

  return (
    <div
      className="xl:px-24 lg:px-6 mb-14 transition-all ease-in sm:mb-12 sm:px-4 md:px-12"
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
      <div className="grid place-items-center">
        <div
          className="grid grid-cols-2 place-items-center 
             xl:gap-10 lg:gap-6 sm:flex sm:flex-col md:gap-4 sm:gap-4"
        >
          {visibleImages.map((item, index) => (
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
        {visibleImages.length < data.length && (
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
        )}
      </div>
    </div>
  );
};

export default Portfolio;
