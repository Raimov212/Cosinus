import Lottie, { InteractivityProps } from "lottie-react";
import animationData from "../../assets/animation/animation.json";
import { LogoTitle } from "../../assets/logo/LogoTitle";
import { LogoTitleMobile } from "../../assets/logo/LogoTitleMobile";

const MainTop = () => {
  const interactivity: Omit<InteractivityProps, "lottieObj"> = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.15, 1.0],
        type: "loop",
        frames: [5, 260],
      },
    ],
  };

  return (
    <div
      className="w-full h-full flex lg:flex-col sm:flex-col xl:items-center
     xl:pl-24 xl:mt-10  "
    >
      <div className="flex flex-col gap-10 sm:gap-5 flex-initial lg:pl-8 sm:px-4">
        <div>
          <div className="sm:hidden">
            <LogoTitle />
          </div>
          <div className="hidden sm:block ">
            <LogoTitleMobile />
          </div>
          <h2 className="text-primary text-5xl sm:text-2xl font-bold">
            IT - kompaniyasi
          </h2>
        </div>
        <span className="xl:w-[550px] text-3xl sm:text-base font-sans text-secondary">
          Mijozlar ehtiyojidan kelib chiqqan holda, xizmatlar taklif qilamiz.
        </span>
        <a href="#call">
          <button className="bg-secondary p-2 rounded-md text-primary w-64 md:w-64 sm:w-full">
            Bog'lanish
          </button>
        </a>
      </div>
      <div className="w-full h-full">
        <Lottie
          animationData={animationData}
          interactivity={interactivity}
          action="scroll"
          className="sm:mt-4"
        />
      </div>
    </div>
  );
};

export default MainTop;
