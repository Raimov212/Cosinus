import { AiFillYoutube, AiOutlineGlobal } from "react-icons/ai";
import { BiLogoTelegram, BiSolidPhoneCall } from "react-icons/bi";
import { CgFacebook } from "react-icons/cg";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { LogoMobileLine } from "../assets/logo/LogoMobileLine";
import { Logo } from "../assets/logo/Logo";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      className="w-full h-full xl:px-24 xl:py-12 lg:px-6 lg:pt-6 lg:pb-2 
    flex flex-col gap-5 bg-primary sm:px-4 sm:py-4 sm:pt-8 md:px-12 md:py-4"
    >
      <div className="flex sm:flex-col sm:items-center sm:gap-5 gap-[10rem] lg:gap-[2rem] justify-center">
        <div className="flex  gap-5 items-center justify-center sm:items-center">
          <div className="text-primary text-lg gap-10 lg:text-md flex items-center sm:flex-col sm:gap-2">
            <div className="flex gap-2 text-primary items-center">
              <div className="text-2xl lg:text-xl ">
                <BiSolidPhoneCall />
              </div>
              <a
                href="tel:+998981003631"
                className="text-primary text-xl sm:text-base"
              >
                +998 98 100 36 31
              </a>
            </div>
            <div className="flex gap-2 text-primary items-center">
              <div className="text-2xl lg:text-xl  sm:text-base">
                <AiOutlineGlobal />
              </div>
              <span>cosinus.uz</span>
            </div>
            <div className="flex gap-4 text-primary text-2xl">
              <a href="https://t.me/cosinussupport_bot">
                <BiLogoTelegram />
              </a>
              <a href="https://instagram.com/cosinus_uz?igshid=MzRlODBiNWFlZA==">
                <RiInstagramFill />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552070373660&mibextid=LQQJ4d">
                <CgFacebook />
              </a>
              <a href="https://youtube.com/@cosinus_uz?si=iGovnDlbalbTBhLL">
                <AiFillYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[0.5px] border-gray-300"></div>
      <div className="flex sm:flex-col sm:gap-1 justify-between items-center">
        <div className="hidden sm:block lg:block">
          <LogoMobileLine />
        </div>
        <div className="sm:hidden lg:hidden">
          <Logo />
        </div>
        <p className="text-secondary font-sans text-md">
          {t("footer.certificate")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
