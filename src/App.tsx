import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Location from "./pages/Location";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Technology from "./pages/Technology";
import WorkCategory from "./pages/WorkCategory";
import HeaderComponent from "./components/Header/HeaderComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full 4xl:px-96 p-0 m-0 ">
        <Navbar />
        <div className="overflow-hidden h-full">
          <Routes>
            <Route path="/" index element={<HeaderComponent />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/location" element={<Location />} />
            <Route path="/Service" element={<Service />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/work-category" element={<WorkCategory />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
