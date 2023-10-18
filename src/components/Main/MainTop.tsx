import Lottie from "lottie-react";
import animationData from "../../assets/animation/animation.json";
import { LogoTitle } from "../../assets/logo/LogoTitle";
import { useTranslation } from "react-i18next";

const MainTop = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full h-full flex lg:flex-col sm:flex-col xl:items-center
     xl:pl-24 xl:mt-10 md:mt-20 md:px-12"
    >
      <div className="flex flex-col flex-1 gap-5 sm:gap-5 lg:pl-8 sm:px-4">
        <div>
          <div className="w-[282px] lg:w-[219px] sm:w-[150px]">
            <LogoTitle />
          </div>
          <h2 className="text-primary text-5xl sm:text-2xl font-bold">
            {t("mainTop.title")}
          </h2>
        </div>
        <span className="xl:w-[550px] text-3xl sm:text-base font-sans text-secondary">
          {t("mainTop.description")}
        </span>
        {/* <a href="#call">
          <button className="bg-secondary p-2 rounded-md text-primary w-64 md:w-64 sm:w-[180px]">
            {t("mainTop.call")}
          </button>
        </a> */}
      </div>
      <div className="w-full h-full flex-1">
        <Lottie animationData={animationData} loop={true} className="sm:mt-4" />
      </div>
    </div>
  );
};

export default MainTop;
