import { AiFillYoutube, AiOutlineGlobal } from "react-icons/ai";
import { BiLogoTelegram, BiSolidPhoneCall } from "react-icons/bi";
import { CgFacebook } from "react-icons/cg";
import { RiInstagramFill } from "react-icons/ri";
import { Logo } from "../assets/logo/Logo";

const Footer = () => {
  return (
    <div
      className="w-full h-full xl:px-24 xl:py-12 lg:px-6 lg:pt-6 lg:pb-2 
    flex flex-col gap-5 bg-primary sm:px-4 sm:py-4 sm:pt-8"
    >
      <div className="flex sm:flex-col sm:items-center sm:gap-5 gap-[10rem] lg:gap-[2rem] ">
        <div className="flex flex-col sm:items-center gap-5 sm:gap-2">
          <p className="text-primary text-3xl lg:text-2xl sm:text-xl">
            Bizning xizmatlarimiz
          </p>
          <ul className="text-primary text-lg lg:text-md sm:text-sm flex flex-col gap-1 sm:gap-0">
            <li>Veb Saytlar</li>
            <li>Veb Saytlar</li>
            <li>Veb Saytlar</li>
            <li>Veb Saytlar</li>
            <li>Veb Saytlar</li>
            <li>Veb Saytlar</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 sm:items-center">
          <p className="text-primary text-3xl lg:text-2xl sm:text-xl">
            Portfolio
          </p>
          <ul className="text-primary text-lg lg:text-md sm:text-sm flex flex-col gap-1 sm:gap-0">
            <li>Cosinus IT-konpaniyasi</li>
            <li>Cosinus IT-konpaniyasi</li>
            <li>Cosinus IT-konpaniyasi</li>
            <li>Cosinus IT-konpaniyasi</li>
            <li>Cosinus IT-konpaniyasi</li>
            <li>Cosinus IT-konpaniyasi</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 sm:items-center">
          <p className="text-primary text-3xl lg:text-2xl sm:text-xl">
            Bog‘lanish
          </p>
          <div className="text-primary text-lg lg:text-md flex flex-col sm:items-center gap-2">
            <div className="flex gap-2 text-primary items-center">
              <div className="text-2xl lg:text-xl ">
                <BiSolidPhoneCall />
              </div>
              <span>+998 94 332 00 16</span>
            </div>
            <div className="flex gap-2 text-primary items-center">
              <div className="text-2xl lg:text-xl">
                <AiOutlineGlobal />
              </div>
              <span>amalit.uz</span>
            </div>
            <div className="flex gap-6 text-primary text-2xl">
              <BiLogoTelegram />
              <RiInstagramFill />
              <AiFillYoutube />
              <CgFacebook />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t-[0.5px] border-gray-300"></div>
      <div className="flex sm:flex-col sm:gap-1 justify-between items-center">
        <Logo />
        <p className="text-secondary font-sans text-md">
          © 2023 Cosinus IT. Barcha huquqlar himoyalangan
        </p>
      </div>
    </div>
  );
};

export default Footer;
