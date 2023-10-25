import { RotatingLines } from "react-loader-spinner";

const LoadingPage = () => {
  return (
    <div className="fixed w-full h-full flex items-center justify-center">
      <div
        className="absolute z-20 xl:w-[1000px] xl:h-[500px] rounded-full
       top-[-30rem] right-[10%] bg_navbar_gradient 4xl:right-[20%]"
      ></div>
      <div className="bg-primary fixed w-full h-full"></div>
      <div className="z-10">
        <RotatingLines
          strokeColor="#ffffff"
          strokeWidth="5"
          animationDuration="1.5"
          visible={true}
        />
      </div>
      <div
        className="absolute z-[0] xl:w-[300px] xl:h-[500px] rounded-full bottom-[-10rem] left-0
       bg_gradient_main_left blur-[200px] 4xl:top-[15rem] 4xl:left-[20rem]"
      ></div>
      <div
        className="absolute z-[0] 4xl:xl:w-[400px] 4xl:h-[200px] xl:xl:w-[300px] xl:h-[100px] blur-[80px] sm:w-[200px]
       sm:h-[80px] 4xl:top-[40%] 4xl:right-[25%] rounded-full bottom-[2rem] right-52 sm:right-[7rem] bg_gradient_main_right
       4xl:blur-[150px]"
      ></div>
    </div>
  );
};

export default LoadingPage;
