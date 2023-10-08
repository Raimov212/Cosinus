import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Location from "./pages/Location";
import Main from "./pages/Main";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Technology from "./pages/Technology";
import WorkCategory from "./pages/WorkCategory";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Header>
        <Main />
        <Service />
        <Technology />
        <Portfolio />
        <WorkCategory />
        <Location />
      </Header>
      <Footer />
    </div>
  );
}

export default App;
