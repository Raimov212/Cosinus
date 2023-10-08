import { useState } from "react";
import LogoImg from "../assets/cosinus.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="h-10 my-4 xl:px-24 lg:px-4 sm:mb-12 sm:px-4">
      <div className="flex justify-between items-center transition-all ease-in-out ">
        {open ? (
          <div
            className="transition-all ease-in-out absolute top-0 left-0 w-[80%] sm:w-full h-full z-50
             bg-primary opacity-95 pt-10 sm:block"
          >
            <ul className="flex flex-col gap-10 text-secondary items-center">
              <li>
                <a href="#main">Bosh sahifa</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="">
                  <div className="relative">
                    <p>Cosinus academy</p>
                    <div
                      className="absolute top-[-15px] right-[-40px] bg-gradient-to-r text-secondary
                  from-violet-500 to-violet-600 rounded-t-md rounded-r-md px-[2px] text-sm"
                    >
                      Yangi
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <div
              className="xl:hidden w-8 h-8 flex justify-center items-center
       rounded-md bg-secondary text-primary absolute top-5 right-5"
              onClick={() => setOpen((prev) => !prev)}
            >
              <AiOutlineClose />
            </div>
          </div>
        ) : (
          <div className="xl:hidden w-0 h-full sm:hidden lg:block">
            <div
              className=" w-8 h-8 flex justify-center items-center
       rounded-md bg-secondary text-primary"
              onClick={() => setOpen((prev) => !prev)}
            >
              <AiOutlineMenu />
            </div>
          </div>
        )}
        <div className="flex gap-10 ">
          <img
            src={LogoImg}
            alt="cosinus"
            className="h-10 sm:h-6 sm:w-12 w-18"
          />
          <ul className="flex gap-10 text-secondary items-end lg:hidden sm:hidden">
            <li>
              <a href="#main">Bosh sahifa</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="">
                <div className="relative">
                  <p>Cosinus academy</p>
                  <div
                    className="absolute top-[-15px] right-[-40px] bg-gradient-to-r text-secondary
                  from-violet-500 to-violet-600 rounded-t-md rounded-r-md px-[2px] text-sm"
                  >
                    Yangi
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div
          className="xl:hidden w-8 h-8 flex justify-center items-center
         rounded-md bg-secondary text-primary lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <AiOutlineMenu />
        </div>
        <button className="bg-secondary xl:px-6 xl:py-2 lg:p-4 lg:py-1 rounded-md text-primary sm:hidden">
          Bog'lanish
        </button>
      </div>
    </div>
  );
};

export default Navbar;
