import Lottie from "lottie-react";
import animationData from "../../assets/animation/animation.json";
import AnimationImg from "../../assets/animationImg.png";
import TableAnimation from "../../assets/table-animation.png";

const MainTop = () => {
  return (
    <div
      className="w-full h-full flex lg:flex-col sm:flex-col xl:items-center
     xl:pl-24 xl:mt-10  "
    >
      <div className="flex flex-col gap-10 sm:gap-5 flex-initial lg:pl-8 sm:px-4">
        <div>
          <h1
            className="text-[#36C59E] text-7xl sm:text-4xl text-transparent 
          bg-clip-text bg-gradient-to-r font-bold from-green-300 to-blue-500"
          >
            Cosinus
          </h1>
          <h2 className="text-primary text-5xl sm:text-2xl font-bold">
            IT - kompaniyasi
          </h2>
        </div>
        <span className="xl:w-[500px] text-3xl sm:text-base font-sans text-secondary">
          Mijozlar ehtiyojidan kelib chiqqan holda, xizmatlar taklif qilamiz.
        </span>
        <button className="bg-secondary p-2 rounded-md text-primary w-64 sm:w-full">
          Bog'lanish
        </button>
      </div>
      <div className="relative flex-1 sm:h-[350px] sm:w-[350px] w-full h-full flex items-center lg:justify-center">
        <Lottie
          animationData={animationData}
          className="object-contain absolute xl:w-[500px] xl:h-[550px] xl:top-[80px] xl:right-[50px]
           lg:w-[450px] lg:h-[500px] lg:right-30 lg:top-[50px] sm:w-[220px]  sm:right-[75px] sm:bottom-20"
        />
        <img
          src={AnimationImg}
          alt="Technology Image"
          className="w-full h-full lg:hidden sm:hidden"
        />
        <img
          src={TableAnimation}
          alt="Technology Image"
          className="xl:hidden w-full h-full relative sm:pt-10"
        />
      </div>
    </div>
  );
};

export default MainTop;
