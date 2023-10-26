import Employe01 from "../assets/employee/Shoxrux aka.png";
import Employe02 from "../assets/employee/Jamshid.png";
import Employe03 from "../assets/employee/Elbek.png";
import Employe04 from "../assets/employee/Muzaffar.png";
import Employe05 from "../assets/employee/Zamon.png";
import Employe06 from "../assets/employee/Tolib.png";
import Employe07 from "../assets/employee/Elyor aka.png";
import Employe08 from "../assets/employee/Jasur.png";
import Employe09 from "../assets/employee/Laziz.png";

interface EmployeeData {
  id: number;
  image?: string;
  title: string;
  desc?: string;
}

export const data: EmployeeData[] = [
  {
    id: 1,
    image: Employe01,
    title: "Shoxruh Egamov",
    desc: "CEO",
  },
  {
    id: 2,
    image: Employe02,
    title: "Jamshid Bakhramov",
    desc: "SOFTWARE ENGINEER ",
  },
  {
    id: 3,
    image: Employe03,
    title: "Elbek Suyunov",
    desc: "DESIGNER",
  },
  {
    id: 4,
    image: Employe04,
    title: "Muzaffar Saidaxmedov",
    desc: "SOFTWARE ENGINEER",
  },
  {
    id: 5,
    image: Employe05,
    title: "Zamon Qahorov",
    desc: "SOFTWARE ENGINEER",
  },
  {
    id: 6,
    image: Employe06,
    title: "Tolib ",
    desc: "SALES MANAGER",
  },
  {
    id: 7,
    image: Employe07,
    title: "Elyor Usmanov",
    desc: "SOFTWARE ENGINEER",
  },
  {
    id: 8,
    image: Employe08,
    title: "Jasurbek Raimov",
    desc: "SOFTWARE ENGINEER",
  },
  {
    id: 9,
    image: Employe09,
    title: "Laziz Xojiboyev",
    desc: "KONTENT MAKER",
  },
];
