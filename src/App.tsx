import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Location from "./pages/Location";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import Service from "./pages/Service";
import Technology from "./pages/Technology";
import WorkCategory from "./pages/WorkCategory";
import HeaderComponent from "./components/Header/HeaderComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-hidden h-full w-full">
        <Navbar />
        <Routes>
          <Route path="/" index element={<HeaderComponent />} />
          <Route path="/portfolio" index element={<Portfolio />} />
          <Route path="/location" index element={<Location />} />
          <Route path="/Service" index element={<Service />} />
          <Route path="/technology" index element={<Technology />} />
          <Route path="/work-category" index element={<WorkCategory />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
