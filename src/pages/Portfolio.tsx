import { useTranslation } from "react-i18next";
import PortFolioImg from "../assets/porfolio.png";
import { FiArrowUpRight } from "react-icons/fi";

interface PortfolioData {
  image: string;
  description: string;
}

const Portfolio = () => {
  const { t } = useTranslation();

  const data: PortfolioData[] = [
    {
      image: PortFolioImg,
      description: t("portfolio.designName"),
    },
    {
      image: PortFolioImg,
      description: t("portfolio.designName"),
    },
    {
      image: PortFolioImg,
      description: t("portfolio.designName"),
    },
    {
      image: PortFolioImg,
      description: t("portfolio.designName"),
    },
    {
      image: PortFolioImg,
      description: t("portfolio.designName"),
    },
    {
      image: PortFolioImg,
      description: t("portfolio.designName"),
    },
  ];

  return (
    <div
      className="xl:px-24 lg:px-6 mb-14 transition-all ease-in sm:mb-12 sm:px-4"
      id="portfolio"
    >
      <div className="mt-24 mb-14 xl:w-[110vh] sm:mt-0 sm:mb-6">
        <div className="xl:text-6xl lg:text-4xl sm:text-2xl text-primary">
          {t("portfolio.title")}
        </div>
        <div className="text-2xl text-secondary sm:text-sm">
          {t("portfolio.description")}
        </div>
      </div>
      <div className="grid place-items-center">
        <div className="grid grid-cols-2 xl:gap-10 lg:gap-6 sm:flex sm:flex-col sm:gap-4">
          {data.map((item, index) => (
            <div key={index} className="xl:mb-4 lg:mb-2 ">
              <div
                className="bg-gradient-to-r from-cyan-500 to-blue-500 pt-0.5
                            px-0.5 rounded-t-3xl xl:w-[640px] xl:h-[500px] mb-4"
              >
                <img
                  src={item.image}
                  alt="portfolio"
                  className="w-full h-full object-cover rounded-t-3xl "
                />
              </div>
              <span className="text-primary xl:text-3xl lg:text-2xl sm:text-xl">
                {item.description}
              </span>
            </div>
          ))}
        </div>
        <div className="cursor-pointer flex justify-center items-center gap-4 text-primary w-72 h-12 sm:w-full sm:h-9 sm:mt-4 bg-secondary">
          <button>{t("portfolio.button")}</button>
          <div className="text-xl">
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
