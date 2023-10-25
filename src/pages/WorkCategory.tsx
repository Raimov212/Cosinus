import Brain from "../assets/work-logo/brain1.png";
import Auditory from "../assets/work-logo/auditory1.png";
import Strategy from "../assets/work-logo/strategy.png";
import Development from "../assets/work-logo/development1.png";
import Partners from "../assets/work-logo/partners1.png";
import { useTranslation } from "react-i18next";

const WorkCategory = () => {
  const { t } = useTranslation();

  const data = [
    {
      image: Brain,
      title: t("workCategory.one.categoryTitle"),
      description: t("workCategory.one.description"),
    },
    {
      image: Auditory,
      title: t("workCategory.two.categoryTitle"),
      description: t("workCategory.two.description"),
    },
    {
      image: Strategy,
      title: t("workCategory.three.categoryTitle"),
      description: t("workCategory.three.description"),
    },
    {
      image: Development,
      title: t("workCategory.four.categoryTitle"),
      description: t("workCategory.four.description"),
    },
    {
      image: Partners,
      title: t("workCategory.five.categoryTitle"),
      description: t("workCategory.five.description"),
    },
  ];

  return (
    <div
      className="xl:px-24 lg:px-6 pb-14 bg-[rgba(6, 6, 71, 1)] md:px-10 
    md:relative sm:px-4 relative"
    >
      <div
        className="absolute z-0 w-[1200px] h-[500px] rounded-full top-[-20%] 
      sm:hidden lg:hidden md:hidden  right-[-30%] bg_navbar_gradient"
      ></div>
      <div
        className="absolute z-0 w-[1200px] h-[500px] sm:bottom-[10rem] lg:bottom-[20rem] rounded-full 
      bottom-[-15rem] left-[-25%] md:right-0 md:bottom-[-10%] bg_gradient_main_left"
      ></div>
      <div className="my-14 sm:my-8 xl:w-[110vh]">
        <div className="xl:text-6xl lg:text-4xl z-20 sm:text-2xl md:text-4xl text-primary mb-6 sm:mb-2">
          {t("workCategory.title")}
        </div>
        <div className="text-2xl text-secondary sm:text-sm ">
          {t("workCategory.description")}
        </div>
      </div>
      <div className="grid xl:grid-cols-3 xl:grid lg:grid-cols-2 md:grid-cols-2 md:gap-0 gap-10 ">
        {data?.map((item, index) => (
          <div
            key={index}
            className="xl:w-full lg:w-[350px] xl:h-full lg:h-[300px] md:mx-10 md:mb-10
             bg-gradient-to-r from-cyan-500 to-blue-500 p-[1px] rounded-2xl z-10"
          >
            <div
              className="w-full h-full flex gap-4 md:py-5 sm:py-2 sm:px-2 
            md:px-5 xl:px-4 bg-[#081264] p-2 rounded-2xl xl:py-6  "
            >
              <div
                className="w-[4rem] h-14 sm:h-8 sm:w-10 mt-2 bg-secondary grid place-items-center
               text-3xl text-primary ml-2 rounded-md"
              >
                <img src={item.image} className=" sm:h-4 sm:w-4 " alt="Brain" />
              </div>
              <div className="w-full h-full">
                <p className="text-primary text-4xl md:text-3xl lg:text-3xl sm:text-2xl">
                  {item.title}
                </p>
                <span className="text-secondary text-[20px] sm:text-base md:text-xl font-sans">
                  {item.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCategory;
