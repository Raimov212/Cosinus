import Lottie, { InteractivityProps } from "lottie-react";
import animationData from "../../assets/animation/animation.json";
import AnimationImg from "../../assets/animationImg.png";
import TableAnimation from "../../assets/table-animation.png";
import LogoTitle from "../../assets/logo/logo-title.png";

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
          <img
            src={LogoTitle}
            alt="Logo title"
            className="w-72 lg:w-64 sm:w-48"
          />
          <h2 className="text-primary text-5xl sm:text-2xl font-bold">
            IT - kompaniyasi
          </h2>
        </div>
        <span className="xl:w-[500px] text-3xl sm:text-base font-sans text-secondary">
          Mijozlar ehtiyojidan kelib chiqqan holda, xizmatlar taklif qilamiz.
        </span>
        <button className="bg-secondary p-2 rounded-md text-primary w-64 md:w-64 sm:w-full">
          Bog'lanish
        </button>
      </div>
      <div className="w-full h-full">
        <Lottie
          animationData={animationData}
          interactivity={interactivity}
          action="scroll"
          className="object-contain absolute
         4xl:w-[1200px] 4xl:h-[1200px] 4xl:top-36 4xl:right-24
         xl:w-[450px] xl:h-[600px] xl:top-[150px] xl:right-[80px]
         lg:w-[450px] lg:h-[500px] lg:right-36 lg:top-96
         sm:w-[230px] sm:right-[100px] sm:top-[60%]"
        />
        <img
          src={AnimationImg}
          alt="Technology Image"
          className="w-full h-full lg:hidden sm:hidden"
        />
        <img
          src={TableAnimation}
          alt="Technology Image"
          className="xl:hidden lg:h-full lg:w-full w-full h-full relative sm:pt-10"
        />
      </div>
    </div>
  );
};

export default MainTop;
