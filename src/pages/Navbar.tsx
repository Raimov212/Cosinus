import { useState } from "react";
import { AiFillYoutube, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { CgFacebook } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Logo } from "../assets/logo/Logo";
import { LogoMobile } from "../assets/logo/LogoMobile";
import { useTranslation } from "react-i18next";
import { LogoMobileLine } from "../assets/logo/LogoMobileLine";

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
    <div className="h-10 my-4 xl:px-24 lg:px-4 sm:mb-12 md:pb-4 md:px-12 sm:px-4 navbar pb-1">
      <div
        className={`${
          open
            ? "xl:hidden md:hidden bg-white opacity-30 absolute top-[-30px] left-0 w-full h-[1000px] "
            : null
        }`}
      ></div>
      <div
        className="flex justify-between items-center transition-all ease-in-out 
     "
      >
        {open ? (
          <div
            className="transition-all ease-in-out absolute  top-[-25px] mt-2
            lg:left-0 md:left-0 sm:right-0 w-[80%] bg-primary pb-[50rem]
            py-5 px-4 flex flex-col justify-between xl:hidden h-full opacity-100"
          >
            <div className="flex flex-col gap-10  bg-primary ">
              <div className="flex items-center justify-between">
                <LogoMobile />

                <div
                  className="xl:hidden w-10 h-10 flex justify-center items-center
                   rounded-md  text-primary text-xl"
                  onClick={() => setOpen((prev) => !prev)}
                >
                  <AiOutlineClose />
                </div>
              </div>
              <ul className="flex flex-col gap-5 text-secondary ">
                <li className="w-full h-10  bg-gradient-to-r from-[#34B8A3] group to-[#1913EA] p-[1px] rounded-md">
                  <a href="/">
                    <div className="h-full bg-primary rounded-md pl-4 group-hover:bg-secondary pt-[6px]">
                      <p className="">{t("navbar.list.one")}</p>
                    </div>
                  </a>
                </li>
                <li className="w-full h-10 bg-gradient-to-r from-[#34B8A3] group to-[#1913EA] p-[1px] rounded-md">
                  <a href="#portfolio">
                    <div className="h-full bg-primary rounded-md pl-4 pt-[6px]  group-hover:bg-secondary">
                      Portfolio
                    </div>
                  </a>
                </li>
                <li className="w-full h-12 bg-gradient-to-r from-[#34B8A3] group to-[#1913EA] p-[1px] rounded-md">
                  <div className="h-full bg-primary rounded-md pl-4 pt-[10px]  group-hover:bg-secondary">
                    <p>Cosinus academy</p>
                  </div>
                </li>
                <li className="w-full hidden sm:block lg:block h-10  bg-gradient-to-r from-[#34B8A3] group to-[#1913EA] p-[1px] rounded-md">
                  <a href="#call">
                    <div className="h-full bg-primary rounded-md pl-4 group-hover:bg-secondary pt-[6px]">
                      <p className="">{t("navbar.call")}</p>
                    </div>
                  </a>
                </li>
                <div
                  className="bg-gradient-to-r hidden w-24 sm:block xl:h-full xl:w-full from-[#34B8A3] to-[#1913EA]
            md:p-[0.8px] p-[1px]  rounded-md mr-1"
                >
                  <select
                    defaultValue={language}
                    onChange={handleLanguageChange}
                    className="bg-primary w-full text-sm text-primary p-2 sm:p-[6px]
                 rounded-md cursor-pointer xl:h-10"
                  >
                    <option value="uz">O'zbek</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </ul>
            </div>
            <div className="flex gap-6 text-[#3C4BDC] text-3xl sm:text-2xl justify-center mt-[20rem]">
              <BiLogoTelegram />
              <RiInstagramFill />
              <AiFillYoutube />
              <CgFacebook />
            </div>
          </div>
        ) : (
          <div className="xl:hidden md:hidden w-0 h-full sm:hidden lg:block">
            <div
              className="w-8 h-8 flex justify-center items-center
                          rounded-md bg-secondary text-primary"
              onClick={() => setOpen((prev) => !prev)}
            >
              <AiOutlineMenu />
            </div>
          </div>
        )}
        <div className="flex gap-10 md:gap-0 lg:justify-between">
          <div className="mr-32 sm:hidden md:block lg:hidden">
            <Logo />
          </div>
          <div className="hidden sm:block lg:block md:hidden">
            <LogoMobileLine />
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
        <div className="flex gap-4 items-center md:mt-auto">
          <div className="flex xl:gap-8 items-center">
            <div
              className="bg-gradient-to-r xl:h-full xl:w-full from-[#34B8A3] to-[#1913EA]
            md:p-[0.8px] p-[1px]  rounded-md mr-1"
            >
              <select
                defaultValue={language}
                onChange={handleLanguageChange}
                className="bg-primary w-full text-sm text-primary p-2 sm:p-[6px]
                 rounded-md cursor-pointer xl:h-10"
              >
                <option value="uz">O'zbek</option>
                <option value="ru">Русский</option>
                <option value="en">English</option>
              </select>
            </div>
            <a href="#call">
              <button
                className="bg-secondary flex justify-center lg:hidden xl:py-2 w-40
              lg:p-4 lg:py-1 rounded-md text-primary sm:hidden md:block md:h-8"
              >
                {t("navbar.call")}
              </button>
            </a>
          </div>

          <div
            className="xl:hidden md:hidden w-8 h-8 flex justify-center items-center
         rounded-md bg-secondary text-primary lg:hidden "
            onClick={() => setOpen((prev) => !prev)}
          >
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
