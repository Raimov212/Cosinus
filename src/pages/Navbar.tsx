import { useState } from "react";
import { AiFillYoutube, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Logo } from "../assets/logo/Logo";
import { LogoMobile } from "../assets/logo/LogoMobile";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    changeLanguage(language);
    const storageLanguage = JSON.stringify(language);
    localStorage.setItem("language", storageLanguage);
  };

  return (
    <div className="h-10 my-4 xl:px-24 lg:px-4 sm:mb-12 sm:px-4 ">
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
                       py-5 px-4 flex flex-col justify-between xl:hidden"
          >
            <div className="flex flex-col gap-10 ">
              <div className="flex items-center justify-between">
                <LogoMobile />
                <div
                  className="bg-gradient-to-r xl:hidden from-[#34B8A3] to-[#1913EA]
                             p-[0.5px] md:p-[1px] rounded-md md:h-9  h-[15px]"
                >
                  <select
                    defaultValue={language}
                    onChange={handleLanguageChange}
                    className="bg-primary w-full text-sm text-primary p-1 md:p-2 rounded-md cursor-pointer"
                  >
                    <option value="uz">O'zbek</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div
                  className="xl:hidden w-10 h-10 flex justify-center items-center
                   rounded-md  text-primary text-xl"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <AiOutlineClose />
                </div>
              </div>
              <ul className="flex flex-col gap-5 text-secondary items-center ">
                <li className="w-full h-10  bg-gradient-to-r from-[#34B8A3] group to-[#1913EA] p-[1px] rounded-md">
                  <div className="h-full bg-primary rounded-md pl-4  group-hover:bg-secondary pt-[6px]">
                    <Link to="/">{t("navbar.call")}</Link>
                  </div>
                </li>
                <li className="w-full h-10 bg-gradient-to-r from-[#34B8A3] group to-[#1913EA] p-[1px] rounded-md">
                  <div className="h-full bg-primary rounded-md pl-4 pt-[6px]  group-hover:bg-secondary">
                    <a href="#portfolio">Portfolio</a>
                  </div>
                </li>
                <li className="w-full h-12 bg-gradient-to-r from-[#34B8A3] group to-[#1913EA] p-[1px] rounded-md">
                  <div className="h-full bg-primary rounded-md pl-4 pt-[10px]  group-hover:bg-secondary">
                    <p>Cosinus academy</p>
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
          <div className="mr-32 sm:hidden">
            <Logo />
          </div>
          <div className="mr-32 hidden sm:block">
            <LogoMobile />
          </div>
          <ul className="flex gap-10 text-secondary items-end lg:hidden sm:hidden">
            <li>
              <Link to="/">{t("navbar.list.one")}</Link>
            </li>
            <li>
              <a href="#portfolio">{t("navbar.list.two")}</a>
            </li>
            <li>
              <a href="">
                <div className="relative">
                  <p>{t("navbar.list.three")}</p>
                  <div
                    className="absolute top-[-15px] right-[-40px] bg-gradient-to-r text-secondary
                  from-violet-500 to-violet-600 rounded-t-md rounded-r-md px-[2px] text-sm"
                  >
                    {t("navbar.list.new")}
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
        <div className="flex gap-5 sm:fixed sm:top-5 sm:right-5">
          <div className="bg-gradient-to-r xl:block sm:hidden md:hidden from-[#34B8A3] to-[#1913EA] p-[2px] sm:p-[2px] rounded-md  h-10">
            <select
              onChange={handleLanguageChange}
              className="bg-primary w-full  text-primary p-2 rounded-md cursor-pointer"
            >
              <option value="uz">O'zbek</option>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
          <a href="#call">
            <button
              className={`${
                open ? "fixed top-5 right-5" : ""
              } bg-secondary xl:px-6 xl:py-2 lg:p-4 lg:py-1 rounded-md text-primary sm:hidden md:block`}
            >
              {t("navbar.call")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
