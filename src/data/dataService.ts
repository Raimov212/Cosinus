import { useTranslation } from "react-i18next";

export default function getDataServiceComponent() {
  const { t } = useTranslation();
  return [
    {
      title: t("services.service.one"),
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
    {
      title: t("services.service.five"),
      description: t("services.service.fiveDescription"),
    },
    {
      title: t("services.service.six"),
      description: t("services.service.sixDescription"),
    },
    {
      title: t("services.service.seven"),
      description: t("services.service.sevenDescription"),
    },
    {
      title: t("services.service.eight"),
      description: t("services.service.eightDescription"),
    },
    {
      title: t("services.service.nine"),
      description: t("services.service.nineDescription"),
    },
    {
      title: t("services.service.ten"),
      description: t("services.service.tenDescription"),
    },
    {
      title: t("services.service.eleven"),
      description: t("services.service.elevenDescription"),
    },
    {
      title: t("services.service.twelve"),
      description: t("services.service.twelveDescription"),
    },
    {
      title: t("services.service.thirteen"),
      description: t("services.service.thirteenDescription"),
    },
    {
      title: t("services.service.fourteen"),
      description: t("services.service.fourteenDescription"),
    },
    {
      title: t("services.service.fifteen"),
      description: t("services.service.fifteenDescription"),
    },
    {
      title: t("services.service.sixteen"),
      description: t("services.service.sixteenDescription"),
    },
    {
      title: t("services.service.seventeen"),
      description: t("services.service.seventeenDescription"),
    },
    {
      title: t("services.service.eighteen"),
      description: t("services.service.eighteenDescription"),
    },
  ];
}
