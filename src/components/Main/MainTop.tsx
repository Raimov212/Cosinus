import Lottie from "lottie-react";
import animationData from "../../assets/animation/animation.json";
import { LogoTitle } from "../../assets/logo/LogoTitle";
import { useTranslation } from "react-i18next";

const MainTop = () => {
  const { t } = useTranslation();

  return (
    <div
      id="main"
      className="w-full h-full flex lg:flex-col sm:flex-col xl:items-center
     xl:pl-24 xl:mt-10 md:mt-20 md:px-12 box "
    >
      <div
        className="absolute z-20 xl:w-[1000px] xl:h-[500px] rounded-full
       top-[-30rem] right-[10%] bg_navbar_gradient 4xl:right-[20%]"
      ></div>
      <div className="flex z-10 flex-col flex-1 gap-5 sm:gap-5 lg:pl-8 sm:px-4">
        <div className="">
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
      <div
        className="absolute z-[0] xl:w-[300px] xl:h-[500px] rounded-full bottom-[-10rem] left-0
       bg_gradient_main_left blur-[200px] 4xl:top-[15rem] 4xl:left-[20rem]"
      ></div>
      <div className="w-full h-full flex-1 z-[1]">
        <Lottie animationData={animationData} loop={true} className="sm:mt-4" />
      </div>
      <div
        className="absolute z-[0] 4xl:xl:w-[400px] 4xl:h-[200px] xl:xl:w-[300px] xl:h-[100px] blur-[80px] sm:w-[200px]
       sm:h-[80px] 4xl:top-[40%] 4xl:right-[25%] rounded-full bottom-[2rem] right-52 sm:right-[7rem] bg_gradient_main_right
       4xl:blur-[150px]"
      ></div>
    </div>
  );
};

export default MainTop;
