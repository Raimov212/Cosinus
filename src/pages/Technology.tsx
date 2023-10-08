import { useState } from "react";
import CssImg from "../assets/technology/css.png";
import Html from "../assets/technology/html.png";
import Javascript from "../assets/technology/javascript.png";
import ReactTS from "../assets/technology/reactts.png";
import Sass from "../assets/technology/sass.png";
import VueJS from "../assets/technology/vuejs.png";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface DataTechnology {
  title: string;
  description?: string;
  logo?: string[] | undefined;
  openGroup: boolean;
  id: string;
}

const Technology = () => {
  const data: DataTechnology[] = [
    {
      id: "1",
      openGroup: false,
      title: "Frontend",
      description:
        "Veb-ilovalar MVP yaratishning eng yaxshi usuli hisoblanadi. Va bu uni qurish uchun bizning stekimiz!",

      logo: [CssImg, Html, Sass, Javascript, ReactTS, VueJS],
    },
    {
      id: "2",
      openGroup: false,
      title: "Backend",
    },
    {
      id: "3",
      openGroup: false,
      title: "Devops",
    },
    {
      id: "4",
      openGroup: false,
      title: "UX/UI",
    },
    {
      id: "5",
      openGroup: false,
      title: "Mobile",
    },
  ];

  const [openComponent, setOpenComponent] = useState<{ id: string }>({
    id: "",
  });

  const handleOpenFC = (checkedId: string) => {
    if (checkedId === openComponent.id) {
      setOpenComponent((prev) => ({ ...prev, id: "" }));
    } else {
      setOpenComponent((prev) => ({ ...prev, id: checkedId }));
    }
  };

  return (
    <div className="xl:px-24 lg:px-6 sm:mb-12 sm:px-4">
      <div className="mt-24 mb-14 sm:mt-0 sm:mb-8">
        <div className="text-6xl lg:text-4xl sm:text-xl text-primary mb-6 sm:mb-2 ">
          Loyihangizni muammosiz bajarish uchun eng yangi texnologiyalardan
          foydalanamiz
        </div>
        <div className="text-2xl sm:text-[12px] text-secondary ">
          IT-autsorsing kompaniyalari o'z mijozlarining ehtiyojlariga
          moslashtirilgan turli xizmatlarni taklif qilishadi.
        </div>
      </div>
      <div className="w-full flex flex-col gap-6 ">
        {data?.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[1px] sm:p-[1.7px] rounded-2xl sm:rounded-lg"
              onClick={() => handleOpenFC(item.id)}
            >
              <>
                {item.id && item.id === openComponent.id ? (
                  <div
                    className="cursor-pointer bg-primary py-6 px-8 sm:py-4 sm:px-4 flex flex-col gap-4
                   rounded-2xl sm:rounded-lg transition-all ease-in-out"
                  >
                    <div className="flex justify-between items-center ">
                      <div className="text-3xl font-bold sm:text-xl text-primary ">
                        {item.title}
                      </div>
                      <div className="text-primary text-2xl sm:text-xl flex">
                        <BsChevronDown />
                      </div>
                    </div>
                    <div className=" transition-all ease-in ">
                      <div className="text-2xl sm:text-lg font-bold text-secondary mb-3">
                        {item?.description}
                      </div>
                      <div className="flex transition-all ease-in-out gap-6">
                        {item.logo?.map((lg, index) => {
                          return (
                            <img
                              key={index}
                              src={lg}
                              alt="Technology"
                              className="xl:w-24 xl:h-24 lg:w-16 lg:h-16 sm:w-7 sm:h-7"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="cursor-pointer bg-primary py-6 px-8 sm:py-4 sm:px-4 flex flex-col gap-4 rounded-2xl sm:rounded-lg">
                    <div className="flex justify-between items-center ">
                      <div className="text-3xl font-bold text-primary sm:text-xl">
                        {item.title}
                      </div>
                      <div className="text-primary text-2xl sm:text-xl">
                        <BsChevronUp />
                      </div>
                    </div>
                  </div>
                )}
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
