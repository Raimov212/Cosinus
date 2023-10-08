import { IoIosCall } from "react-icons/io";

const WorkCategory = () => {
  const data = [
    {
      title: "Tahlil va g'oya",
      description:
        "Ushbu bo'limda raqobatchilar tahlil qilinadi, bozor o'rganiladi. Va proektning dastlabki g'oylari paydo bo'ladi",
    },
    {
      title: "Auditoriya",
      description:
        "Maqsadli auditoriya tanlanadi, talablari o'rganilib, ularning ehtiyoji aniqlanadi",
    },
    {
      title: "Strategiya",
      description:
        "Qilinishi kerak bo'lgan ishlar aniqlanadi, ularning ketma-ketiligi tuzib olinadi yani reja tuziladi",
    },
    {
      title: "Rivojlanish",
      description:
        "Reja asosida qilinishi kerak bo'lgan ishlar qilinadi va proekt muvaqqiyatli tugashi uchun sirli fishkalardan foydalniladi",
    },
    {
      title: "Hamkorlarimiz",
      description: "Bizga bildirgan ishonchingiz uchun tashakkur!",
    },
  ];

  return (
    <div className="xl:px-24 lg:px-6 pb-14 bg-[#081264] sm:mb-12 sm:px-4">
      <div className="my-14 sm:my-8 xl:w-[110vh]">
        <div className="xl:text-6xl lg:text-4xl sm:text-2xl text-primary mb-6 sm:mb-2">
          Biz qanday ishlaymiz
        </div>
        <div className="text-2xl text-secondary sm:text-sm ">
          IT-autsorsing kompaniyalari o'z mijozlarining ehtiyojlariga
          moslashtirilgan turli xizmatlarni taklif qilishadi.
        </div>
      </div>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-10">
        {data?.map((item, index) => (
          <div
            key={index}
            className="xl:w-[430px] lg:w-[350px] xl:h-[250px] lg:h-[300px]  bg-gradient-to-r from-cyan-500 to-blue-500 p-[1px] rounded-2xl"
          >
            <div className="w-full h-full flex gap-4 pt-8 sm:py-6 sm:px-4 bg-primary p-2 rounded-2xl">
              <div className="w-16 h-14 bg-secondary grid place-items-center text-3xl text-primary ml-2">
                <IoIosCall />
              </div>
              <div className="w-full">
                <p className="text-primary text-3xl sm:text-xl">{item.title}</p>
                <span className="text-secondary text-xl sm:text-base font-sans">
                  {item.description}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkCategory;