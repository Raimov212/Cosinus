import {
  YMaps,
  Map,
  Placemark,
  TrafficControl,
  TypeSelector,
} from "@pbe/react-yandex-maps";

//Company Logo
import { Group } from "../assets/company/Group";
import { AdrenalineRush } from "../assets/company/AdrenalineRush";
import { GoldenHouse } from "../assets/company/GoldenHouse";
import { Ung } from "../assets/company/Ung";
import { Hilton } from "../assets/company/Hilton";
import { MuradBuilding } from "../assets/company/MuradBuilding";
//Icons
import { IoLocationSharp } from "react-icons/io5";
import { HiMiniPhone } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillYoutube } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { useTranslation } from "react-i18next";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import axios, { AxiosResponse } from "axios";

import "react-alice-carousel/lib/alice-carousel.css";

interface UserData {
  username: string;
  email: string;
  description: string;
}

const token = "6803129748:AAEcatrK8_DTbfd2ybkmElyQ40gxZqbjObA";
const chat_id = 352034945;

const Location = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<UserData>({
    username: "",
    email: "",
    description: "",
  });

  const handleChangeForm = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const day = new Date();

  const handleUserFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sendData = {
      chat_id,
      text: {
        Name: data.username,
        Email: data.email,
        Description: data.description,
        Date: `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`,
      },
    };

    try {
      const response: AxiosResponse = await axios.post(
        `https://api.telegram.org/bot${token}/sendMessage`,
        sendData
      );

      if (response.data.ok) {
        setData((prev) => ({
          ...prev,
          email: "",
          description: "",
          username: "",
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="call" className=" sm:mb-12 relative">
      <div className="sm:hidden lg:hidden md:hidden absolute z-0 w-[800px] h-[800px] rounded-full bottom-[0rem] left-[-25%] bg_location_left"></div>
      <div className="mt-24 mb-14 sm:mt-0 sm:mb-0 w-full flex flex-col gap-10 z-10 sm:pt-12">
        <div className="z-10">
          <div className="md:px-12 xl:px-24 lg:px-6 sm:px-4  ">
            <div className="xl:text-6xl lg:text-4xl sm:text-2xl md:text-4xl text-primary ">
              {t("company.title")}
            </div>
            <div className="text-2xl sm:text-base text-secondary font-sans xl:w-[90vh]">
              {t("company.description")}
            </div>
          </div>
          <div className="overflow-x-hidden absolute w-full h-[10rem] z-10"></div>
          <div className="overflow-x-scroll overflow-y-hidden mt-6 z-1">
            <div className="w-full  grid grid-flow-col animate-marquee-infinite gap-14 ">
              <div className="w-full h-full sm:w-[50rem]  sm:h-16 flex items-center gap-20 sm:gap-10">
                <AdrenalineRush />
                <Group />
                <GoldenHouse />
                <Ung />
                <Hilton />
                <MuradBuilding />
              </div>
              <div className="w-full h-full sm:w-36 sm:h-16 flex items-center gap-20">
                <AdrenalineRush />
                <Group />
                <GoldenHouse />
                <Ung />
                <Hilton />
                <MuradBuilding />
              </div>
              <div className="w-full h-full sm:w-36 sm:h-16 flex items-center gap-20">
                <AdrenalineRush />
                <Group />
                <GoldenHouse />
                <Ung />
                <Hilton />
                <MuradBuilding />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-16 md:px-12 xl:px-24 lg:px-6 sm:px-4  "
          id="call"
        >
          <div>
            <div className="xl:text-6xl lg:text-4xl sm:text-2xl text-primary md:text-4xl">
              {t("call.title")}
            </div>
            <div className="text-2xl sm:text-base text-secondary font-sans xl:w-[90vh]">
              {t("call.description")}
            </div>
          </div>
          <div className="flex gap-20 lg:flex-col sm:flex-col md:flex-col">
            <form
              onSubmit={handleUserFormSubmit}
              className="flex-1 flex flex-col gap-7 sm:gap-5 z-10"
            >
              <div className="flex sm:flex-col sm:gap-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label id="name" className="text-primary text-lg">
                    {t("call.inputName")}
                  </label>
                  <div className="bg-gradient-to-r from-cyan-500 to-secondary rounded-lg p-[1px]">
                    <input
                      name="username"
                      onChange={handleChangeForm}
                      type="text"
                      required={true}
                      value={data.username}
                      placeholder={`${t("call.inputPlaceholder")}`}
                      className="text-primary p-2 bg-primary outline-none focus:ring-1
                       focus:border-sky-500 focus:ring-sky-500 pl-3 rounded-lg w-[20rem] sm:w-full
                       placeholder:italic placeholder:text-secondary"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label id="email" className="text-primary text-lg">
                    {t("call.email")}
                  </label>
                  <div className="bg-gradient-to-r from-cyan-500 to-secondary rounded-lg p-[1px] w-full">
                    <input
                      name="email"
                      type="email"
                      required={true}
                      value={data.email}
                      onChange={handleChangeForm}
                      placeholder={`${t("call.email")}`}
                      className="text-primary p-2 bg-primary outline-none focus:ring-1
                       focus:border-sky-500 focus:ring-sky-500 pl-3 rounded-lg w-[20rem] sm:w-full
                       placeholder:italic placeholder:text-secondary"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-primary text-lg">
                  {t("call.descriptionName")}
                </label>
                <textarea
                  name="description"
                  value={data.description}
                  onChange={handleChangeForm}
                  placeholder={`${t("call.descriptionName")}`}
                  className="w-full h-[7rem] text-primary p-3 bg-primary outline-none
                   ring-1 border-sky-500 ring-sky-500 pl-5 rounded-lg 
                    placeholder:italic placeholder:text-secondary"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-[20rem] h-12 sm:h-8 sm:w-[12rem] text-primary rounded-md outline-none bg-secondary"
              >
                {t("call.button")}
              </button>
            </form>
            <div className="flex-1 md:flex-none w-full flex flex-col gap-4">
              <div className="flex gap-2 w-[30rem] sm:w-full">
                <div className="text-[#3C4BDC] text-3xl sm:text-2xl">
                  <IoLocationSharp />
                </div>
                <span className="text-primary text-xl sm:text-base">
                  {t("call.location")}
                </span>
              </div>
              <div className="flex gap-2 w-[25rem]">
                <div className="text-[#3C4BDC] text-3xl sm:text-2xl">
                  <HiMiniPhone />
                </div>
                <a
                  href="tel:+998981003631"
                  className="text-primary text-xl sm:text-base"
                >
                  +998 98 100 36 31
                </a>
              </div>
              <div className="flex gap-2 w-[25rem]">
                <div className="text-[#3C4BDC] text-3xl sm:text-2xl">
                  <MdEmail />
                </div>
                <span className="text-primary text-xl sm:text-base">
                  cosinus@gmail.com
                </span>
              </div>
              <div className="flex gap-6 text-[#3C4BDC] text-3xl sm:text-2xl">
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
          <div className="w-full bg-gradient-to-r from-cyan-500 to-secondary ">
            <YMaps>
              <Map
                defaultState={{ center: [41.3028953, 69.3147917], zoom: 17 }}
                width={"101%"}
                height={"20rem"}
              >
                <Placemark geometry={[41.3028953, 69.3147917]} />
                <TrafficControl options={{ float: "left" }} />
                <TypeSelector options={{ float: "right" }} />
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
      <div className="sm:hidden lg:hidden md:hidden absolute z-0 w-[1000px] h-[600px] rounded-full top-[10%] right-[-30%] blur-[500px] bg_gradient_location_right"></div>
    </div>
  );
};

export default Location;
