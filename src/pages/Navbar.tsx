import { useState } from "react";
import LogoImg from "../assets/cosinus.png";
import { AiFillYoutube, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="h-10 my-4 xl:px-24 lg:px-4 sm:mb-12 sm:px-4">
      <div
        className={`${
          open
            ? "xl:hidden bg-white opacity-30 absolute top-0 left-0 w-full h-full"
            : null
        }`}
      ></div>
      <div className="flex justify-between items-center transition-all ease-in-out ">
        {open ? (
          <div
            className="transition-all ease-in-out sm:absolute md:absolute top-0
                       lg:left-0 sm:right-0 w-[80%] h-full z-50 bg-primary 
                       py-5 px-4 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-10">
              <div className="flex items-center justify-between">
                <img src={LogoImg} alt="cosinus" className="h-8 w-16" />
                <div
                  className="xl:hidden w-10 h-10 flex justify-center items-center
                   rounded-md  text-primary text-xl"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <AiOutlineClose />
                </div>
              </div>
              <ul className="flex flex-col gap-5 text-secondary items-center">
                <li className="w-full h-10 bg-gradient-to-r from-[#34B8A3] to-[#1913EA] p-[1px] rounded-md">
                  <div className="h-full bg-primary rounded-md pl-4 pt-[6px]">
                    <Link to="/">Bosh sahifa</Link>
                  </div>
                </li>
                <li className="w-full h-10 bg-gradient-to-r from-[#34B8A3] to-[#1913EA] p-[1px] rounded-md">
                  <div className="h-full bg-primary rounded-md pl-4 pt-[6px]">
                    <Link to="/portfolio">Portfolio</Link>
                  </div>
                </li>
                <li className="w-full h-12 bg-gradient-to-r from-[#34B8A3] to-[#1913EA] p-[1px] rounded-md">
                  <div className="h-full bg-primary rounded-md pl-4 pt-[10px]">
                    <a href="#main">Cosinus academy</a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex gap-6 text-[#3C4BDC] text-3xl sm:text-2xl justify-center">
              <BiLogoTelegram />
              <RiInstagramFill />
              <AiFillYoutube />
              <CgFacebook />
            </div>
          </div>
        ) : (
          <div className="xl:hidden w-0 h-full sm:hidden lg:block">
            <div
              className="w-8 h-8 flex justify-center items-center
                          rounded-md bg-secondary text-primary"
              onClick={() => setOpen((prev) => !prev)}
            >
              <AiOutlineMenu />
            </div>
          </div>
        )}
        <div className="flex gap-10">
          <img
            src={LogoImg}
            alt="cosinus"
            className="h-10 sm:h-6 sm:w-12 w-18"
          />
          <ul className="flex gap-10 text-secondary items-end lg:hidden sm:hidden">
            <li>
              <Link to="/">Bosh sahifa</Link>
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
        <button
          className={`${
            open ? "fixed top-5 right-5" : ""
          } bg-secondary xl:px-6 xl:py-2 lg:p-4 lg:py-1 rounded-md text-primary sm:hidden`}
        >
          Bog'lanish
        </button>
      </div>
    </div>
  );
};

export default Navbar;
