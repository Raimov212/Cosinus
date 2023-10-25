import Main from "../../pages/Main";
import Header from "../../pages/Header";
import Location from "../../pages/Location";
import Portfolio from "../../pages/Portfolio";
import Service from "../../pages/Service";
import Technology from "../../pages/Technology";
import WorkCategory from "../../pages/WorkCategory";

const HeaderComponent = () => {
  return (
    <div className="overflow-hidden">
      <Header>
        <Main />
        <Service />
        <Technology />
        <Portfolio />
        <WorkCategory />
        <Location />
      </Header>
    </div>
  );
};

export default HeaderComponent;
