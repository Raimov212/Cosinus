import MainTop from "../components/Main/MainTop";
import MainBottom from "../components/Main/MainBottom";

const Main = () => {
  return (
    <div id="main" className="transition-all ease-in ">
      <MainTop />
      <MainBottom />
    </div>
  );
};

export default Main;

// transition-all ease-in-out absolute  top-[-20px]
// lg:left-[-5px] md:left-[-50px] sm:right-0 w-[80%] bg-primary pb-[50rem]
// py-5 px-4 flex flex-col justify-between xl:hidden h-full z-[100%] opacity-100
