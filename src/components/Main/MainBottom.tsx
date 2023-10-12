import Employe01 from "../../assets/employee/ShoxruxCEO.png";
import Employe02 from "../../assets/employee/Jamshid.png";
import Employe03 from "../../assets/employee/Elbek.png";
import Employe04 from "../../assets/employee/Muzaffar.png";
import Employe05 from "../../assets/employee/Zamon.png";
import Employe06 from "../../assets/employee/Tolib.png";
import { useTranslation } from "react-i18next";

interface EmployeeData {
  image?: string;
  title: string;
  desc?: string;
}

const MainBottom = () => {
  const { t } = useTranslation();

  const data: EmployeeData[] = [
    {
      image: Employe01,
      title: "Shoxruh Egamov",
      desc: "CEO",
    },
    {
      image: Employe02,
      title: "Jamshid Bakhramov",
      desc: "SOFTWARE ENGINEER ",
    },
    {
      image: Employe03,
      title: "Elbek Suyunov",
      desc: "DESIGNER",
    },
    {
      image: Employe04,
      title: "Muzaffar Saidaxmedov",
      desc: "SOFTWARE ENGINEER",
    },
    {
      image: Employe05,
      title: "Zamon Qahorov",
      desc: "SOFTWARE ENGINEER",
    },
    {
      image: Employe06,
      title: "Tolib ",
      desc: "SALES MANAGER",
    },
  ];

  return (
    <div
      className="w-full h-full xl:flex justify-between xl:px-24 xl:mt-10
     lg:px-8 mb-48 sm:mb-12 sm:px-4 overflow-hidden md:px-12"
    >
      <div className="w-full flex flex-1 flex-col gap-10 sm:gap-2 lg:mb-10 sm:mb-10">
        <div className="xl:w-[500px]">
          <h1 className="text-primary text-6xl sm:text-2xl font-bold">
            {t("mainBottom.title")}
          </h1>
          <span className="text-secondary xl:text-xl md:text-xl font-sans">
            {t("mainBottom.description")}
          </span>
        </div>
        <div>
          <p className="text-[6rem]  font-bold text-[#3C4BDC]">15+</p>
          <p className="text-primary xl:text-2xl md:text-2xl mb-2 lg:text-xl sm:text-lg  font-sans">
            {t("mainBottom.work")}
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-4 overflow-hidden overflow-x-scroll">
        {data?.map((item, index) => (
          <div key={index} className="h-full w-full animate-marquee2-infinite">
            <div
              className="w-64 h-96 sm:h-[24rem] lg:w-52 sm:w-64 
                bg-gradient-to-r from-[#34B8A3] to-[#1913EA] p-[2px]
                  relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                className="w-full h-80 rounded-t-lg 
                 object-cover transition-all ease-in-out
            "
              />
              <div
                className=" text-primary rounded-b-xl 
            bg-secondary  pt-2 px-4 pb-2.5"
              >
                <p className="font-medium">{item.title}</p>
                <p className="font-light text-sm">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainBottom;
