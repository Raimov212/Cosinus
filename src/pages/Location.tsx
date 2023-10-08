import { YMaps, Map } from "@pbe/react-yandex-maps";

//Company Image
import ItPark from "../assets/company/ItPark.png";
import SamAuto from "../assets/company/SamAuto.png";
import AdrenalineRush from "../assets/company/AdrenalineRush.png";
import GoldenHouse from "../assets/company/GoldenHouse.png";
import LastImg from "../assets/company/LastImg.png";
//Icons
import { IoLocationSharp } from "react-icons/io5";
import { HiMiniPhone } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";

interface ImgData {
  image: string;
  desc: string;
}

const Location = () => {
  const data: ImgData[] = [
    {
      image: ItPark,
      desc: "It Park",
    },
    {
      image: SamAuto,
      desc: "Sam Auto",
    },
    {
      image: AdrenalineRush,
      desc: "Adrenaline Rush",
    },
    {
      image: GoldenHouse,
      desc: "Golden House",
    },
    {
      image: LastImg,
      desc: "Last Img",
    },
  ];

  return (
    <div className="xl:px-24 lg:px-6 mb-14 sm:mb-12 sm:px-4 ">
      <div className="mt-24 mb-14 sm:mt-0 sm:mb-0 w-full flex flex-col gap-10">
        <div>
          <div className="xl:text-6xl lg:text-4xl sm:text-2xl text-primary ">
            Bizga ishonch bildirgan kompaniyalar:
          </div>
          <div className="text-2xl sm:text-base text-secondary font-sans xl:w-[90vh]">
            IT-autsorsing kompaniyalari o'z mijozlarining ehtiyojlariga
            moslashtirilgan turli xizmatlarni taklif qilishadi.
          </div>
          <div className="overflow-x-scroll overflow-y-hidden mt-6">
            <div className="w-full grid grid-flow-col gap-5">
              {data?.map((item, index) => (
                <React.Fragment key={index}>
                  <div className="w-72 h-32 sm:w-36 sm:h-16">
                    <img src={item.image} alt={item.desc} />
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <div>
            <div className="xl:text-6xl lg:text-4xl sm:text-2xl text-primary ">
              Biz bilan bo’glanish
            </div>
            <div className="text-2xl sm:text-base text-secondary font-sans xl:w-[90vh]">
              IT-autsorsing kompaniyalari o'z mijozlarining ehtiyojlariga
              moslashtirilgan turli xizmatlarni taklif qilishadi.
            </div>
          </div>
          <div className="flex gap-20 lg:flex-col sm:flex-col">
            <div className="flex-1 flex flex-col gap-7 ">
              <div className="flex sm:flex-col gap-10">
                <div className="flex flex-col gap-2">
                  <label id="name" className="text-primary text-lg">
                    Ismingiz
                  </label>
                  <div className="bg-gradient-to-r from-cyan-500 to-secondary rounded-lg p-[1px]">
                    <input
                      id="name"
                      type="text"
                      placeholder="Ism"
                      className="text-primary p-2 bg-primary focus:outline-none focus:ring-1
                       focus:border-sky-500 focus:ring-sky-500 pl-3 rounded-lg w-[20rem] sm:w-full
                       placeholder:italic placeholder:text-secondary"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label id="email" className="text-primary text-lg">
                    Elektron Pochtangiz
                  </label>
                  <div className="bg-gradient-to-r from-cyan-500 to-secondary rounded-lg p-[1px] w-full">
                    <input
                      id="emil"
                      type="text"
                      placeholder="Elektron Pochtangiz"
                      className="text-primary p-2 bg-primary focus:outline-none focus:ring-1
                       focus:border-sky-500 focus:ring-sky-500 pl-3 rounded-lg w-[20rem] sm:w-full
                       placeholder:italic placeholder:text-secondary"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-primary text-lg">Label</label>
                <textarea
                  placeholder="Label"
                  className="w-full h-[7rem] text-primary p-2 bg-primary focus:outline-none
                   focus:ring-1 focus:border-sky-500 focus:ring-sky-500 pl-3 rounded-lg 
                    placeholder:italic placeholder:text-secondary"
                ></textarea>
              </div>
              <button className="w-[20rem] sm:w-full h-10 text-primary rounded-md bg-secondary">
                Yuborish
              </button>
            </div>
            <div className="flex-1 w-full flex flex-col gap-4">
              <div className="flex gap-2 w-[30rem] sm:w-full">
                <div className="text-[#3C4BDC] text-3xl sm:text-2xl">
                  <IoLocationSharp />
                </div>
                <span className="text-primary text-xl sm:text-base">
                  Tashkent, Mirzo-Ulugbekskiy tumani, mahalla Shaxriobod
                </span>
              </div>
              <div className="flex gap-2 w-[25rem]">
                <div className="text-[#3C4BDC] text-3xl sm:text-2xl">
                  <HiMiniPhone />
                </div>
                <span className="text-primary text-xl sm:text-base">
                  +998 94 332 00 16
                </span>
              </div>
              <div className="flex gap-2 w-[25rem]">
                <div className="text-[#3C4BDC] text-3xl sm:text-2xl">
                  <MdEmail />
                </div>
                <span className="text-primary text-xl sm:text-base">
                  amalit@gmail.com
                </span>
              </div>
              <div className="flex gap-6 text-[#3C4BDC] text-3xl sm:text-2xl">
                <BiLogoTelegram />
                <RiInstagramFill />
                <AiFillYoutube />
                <CgFacebook />
              </div>
            </div>
          </div>
          <div className="w-full bg-gradient-to-r from-cyan-500 to-secondary">
            <YMaps>
              <Map
                defaultState={{ center: [41.322569, 69.234605], zoom: 15 }}
                width={"101%"}
                height={"20rem"}
              />
            </YMaps>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
