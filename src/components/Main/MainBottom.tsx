import Employe01 from "../../assets/employee/employee01.png";
import Employe02 from "../../assets/employee/employee02.png";
import Employe03 from "../../assets/employee/employee03.png";

interface EmployeeData {
  image?: string;
  title: string;
  desc?: string;
}

const MainBottom = () => {
  const data: EmployeeData[] = [
    {
      image: Employe01,
      title: "Suyunov Elbek",
      desc: "UI/UX dizayner",
    },
    {
      image: Employe02,
      title: "Next Employee",
      desc: "Frontend Developer",
    },
    {
      image: Employe03,
      title: "Last Employee",
      desc: "Backend Developer",
    },
  ];

  return (
    <div
      className="w-full h-full xl:flex justify-between xl:px-24 xl:mt-10
     lg:px-8 mb-48 sm:mb-12 sm:px-4"
    >
      <div className="w-full flex flex-col gap-10 sm:gap-2 lg:mb-10 sm:mb-10">
        <div className="xl:w-[500px]">
          <h1 className="text-primary text-6xl sm:text-2xl font-bold">
            Bizning Jamoa
          </h1>
          <span className="text-secondary xl:text-xl font-sans">
            Jamoa o'z sohasining ustasi bo'lgan mutahasislardan yig'ilgan.
            Jamoamizning har bir a'zosi loyihangizni muvafaqqiyatga yetaklaydi.
          </span>
        </div>
        <div>
          <div className="text-6xl text-4xl font-bold text-[#3C4BDC] mb-2">
            15+
          </div>
          <p className="text-primary xl:text-2xl lg:text-xl sm:text-lg  font-sans">
            Muvaffaqiyatli topshirgan ishlarimiz
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        {data?.map((item, index) => (
          <div key={index} className="group w-64 h-96 ">
            <div
              className="w-64 h-96 lg:w-52 group-hover:h-96 sm:w-24 lg:group-hover:w-56
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
