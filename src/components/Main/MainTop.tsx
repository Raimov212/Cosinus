import Lottie from "lottie-react";
import animationData from "../../assets/animation/animation.json";
import AnimationImg from "../../assets/animationImg.png";
import TableAnimation from "../../assets/table-animation.png";
import LogoTitle from "../../assets/logo/logo-title.png";

const MainTop = () => {
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
      {/* <div className="">
        <div className="w-full h-full">
          <Lottie
            animationData={animationData}
            loop={10}
            autoplay={true}
            className="object-contain absolute w-full h-full
           4xl:w-[1200px] 4xl:h-[1200px] 4xl:top-36 4xl:right-24
           xl:w-[550px] xl:h-[600px] xl:top-[280px] xl:right-[120px]
           lg:w-[500px] lg:h-[500px] lg:right-[150px] lg:bottom-[-220px] sm:w-[230px]  
           sm:right-[55px] sm:bottom-10"
          />
          <img
            src={AnimationImg}
            alt="Technology Image"
            className="w-full h-full lg:hidden sm:hidden"
          />
          <img
            src={TableAnimation}
            alt="Technology Image"
            className="xl:hidden w-full h-full relative "
          />
        </div>
      </div> */}

      <div className="w-full h-full">
        <Lottie
          animationData={animationData}
          loop={10}
          autoplay={true}
          className="object-contain absolute 
           4xl:w-[1200px] 4xl:h-[1200px] 4xl:top-36 4xl:right-24
           xl:w-[550px] xl:h-[600px] xl:top-[280px] xl:right-[120px]
           lg:w-[450px] lg:h-[500px] lg:right-36 lg:top-96
           sm:w-[230px] sm:right-[100px] sm:top-[60%] "
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
