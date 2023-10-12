import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t("services.service.oneTitle"),
      description: t("services.service.oneDescription"),
    },
    {
      title: t("services.service.two"),
      description: t("services.service.twoDescription"),
    },
    {
      title: t("services.service.three"),
      description: t("services.service.threeDescription"),
    },
    {
      title: t("services.service.four"),
      description: t("services.service.fourDescription"),
    },
  ];

  return (
    <div className="w-full h-full xl:px-24 lg:px-8 bg-[#081264] py-12 sm:mb-12 sm:px-4">
      <div className="md:px-12">
        <div className="text-primary xl:text-6xl lg:text-4xl md:text-4xl sm:text-2xl ">
          {t("services.title")}
        </div>
        <div className="xl:w-[650px] text-2xl lg:text-xl sm:text-sm font-sans text-secondary">
          {t("services.description")}
        </div>
      </div>
      <div
        className="mt-8 xl:flex xl:justify-between lg:grid md:grid lg:grid-cols-2 
        md:grid-cols-2  sm:flex sm:flex-col sm:gap-4 gap-8 md:px-12 "
      >
        {data?.map((item, index) => (
          <div key={index} className="w-72 sm:w-80 md:w-full">
            <div
              className="border-l-8 sm:border-l-[6px] xl:text-4xl sm:text-xl lg:text-3xl
           h-12 sm:h-10 text-primary border-secondary"
            >
              <h1 className="pl-4 sm:pl-3 md:text-2xl">{item.title}</h1>
            </div>
            <div className="xl:mt-4 text-secondary md:text-xl pl-4 xl:mb-8 sm:pl-2 lg:pl-3 ml-4 sm:text-sm font-light">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
