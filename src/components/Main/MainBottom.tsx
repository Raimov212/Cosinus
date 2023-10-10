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
      title: "Shoxrux CEO",
      desc: "CEO OPTIMIZATION",
    },
    {
      image: Employe02,
      title: "Jamshid",
      desc: "JAVA BACKEND DEVELOPER",
    },
    {
      image: Employe03,
      title: "Elbek",
      desc: "UI/IX DESIGNER",
    },
    {
      image: Employe04,
      title: "Muzaffar",
      desc: "UI/UX dizayner",
    },
    {
      image: Employe05,
      title: "Zamon",
      desc: "DART FLUTTER DEVELOPER",
    },
    {
      image: Employe06,
      title: "Tolib",
      desc: "COPIRAYTER",
    },
  ];

  return (
    <div
      className="w-full h-full xl:flex justify-between xl:px-24 xl:mt-10
     lg:px-8 mb-48 sm:mb-12 sm:px-4"
    >
      <div className="w-full flex flex-1 flex-col gap-10 sm:gap-2 lg:mb-10 sm:mb-10">
        <div className="xl:w-[500px]">
          <h1 className="text-primary text-6xl sm:text-2xl font-bold">
            {t("mainBottom.title")}
          </h1>
          <span className="text-secondary xl:text-xl font-sans">
            {t("mainBottom.description")}
          </span>
        </div>
        <div>
          <p className="text-[6rem]  font-bold text-[#3C4BDC]">15+</p>
          <p className="text-primary xl:text-2xl lg:text-xl sm:text-lg  font-sans">
            {t("mainBottom.work")}
          </p>
        </div>
      </div>
      <div className="flex flex-1 gap-4 overflow-hidden w-[100%] overflow-x-scroll">
        {data?.map((item, index) => (
          <div key={index} className="group snap-center">
            <div
              className="w-64 h-96 lg:w-52 sm:group-hover:w-44 sm:w-24 lg:group-hover:w-64 
                bg-gradient-to-r from-[#34B8A3] to-[#1913EA] p-[2px]  relative rounded-lg overflow-hidden"
            >
              <img
                src={item.image}
                className="w-full h-full group-hover:h-80  rounded-t-lg rounded-b-lg
            group-hover:rounded-b-none object-cover transition-all ease-in-out peer:employee1
            "
              />
              <div
                className="hidden  group-hover:text-primary group-hover:block
            bg-secondary group-hover:rounded-b-lg pt-2 px-4 pb-2.5"
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
