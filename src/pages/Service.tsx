import { useTranslation } from "react-i18next";

const Service = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full xl:px-24 lg:px-8 bg-[#081264] py-12 sm:mb-12 sm:px-4">
      <div className="text-primary xl:text-6xl lg:text-4xl sm:text-2xl">
        {t("services.title")}
      </div>
      <div className="xl:w-[650px] text-2xl lg:text-xl sm:text-sm font-sans text-secondary">
        {t("services.description")}
      </div>
      <div className="mt-8 xl:flex xl:justify-between lg:grid lg:grid-cols-2 sm:flex sm:flex-col  sm:gap-4 gap-8">
        <div className="w-72 sm:w-80 ">
          <div
            className="border-l-8 sm:border-l-[6px] xl:text-4xl sm:text-xl
           h-12 sm:h-10 text-primary border-secondary"
          >
            <h1 className="pl-4 sm:pl-3">{t("services.service.oneTitle")}</h1>
          </div>
          <div className="xl:mt-4 text-secondary ml-4 sm:text-sm font-light">
            {t("services.service.oneDescription")}
          </div>
        </div>
        <div className="w-72 sm:w-80 ">
          <div
            className="border-l-8 sm:border-l-[6px] xl:text-4xl sm:text-xl
           h-12 sm:h-10 text-primary border-secondary"
          >
            <h1 className="pl-4 sm:pl-3">{t("services.service.two")}</h1>
          </div>
          <div className="xl:mt-4 text-secondary ml-4 sm:text-sm font-light">
            {t("services.service.twoDescription")}
          </div>
        </div>
        <div className="w-72 sm:w-80 ">
          <div
            className="border-l-8 sm:border-l-[6px] xl:text-4xl sm:text-xl
           h-12 sm:h-10 text-primary border-secondary"
          >
            <h1 className="pl-4 sm:pl-3">{t("services.service.three")}</h1>
          </div>
          <div className="xl:mt-4 text-secondary ml-4 sm:text-sm font-light">
            {t("services.service.threeDescription")}
          </div>
        </div>
        <div className="w-72 sm:w-80 ">
          <div
            className="border-l-8 sm:border-l-[6px] xl:text-4xl sm:text-xl
           h-12 sm:h-10 text-primary border-secondary"
          >
            <h1 className="pl-4 sm:pl-3">{t("services.service.four")}</h1>
          </div>
          <div className="xl:mt-4 text-secondary ml-4 sm:text-sm font-light">
            {t("services.service.fourDescription")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
