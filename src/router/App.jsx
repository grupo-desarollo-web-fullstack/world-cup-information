import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MoreInfoQatar from "../pages/MoreInfoQatar";
import WorldCupInformation from "../pages/WorldCupInformation";
import Simulator from "../pages/Simulator";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WorldCupInformation />} />
        <Route path="/more-info-qatar" element={<MoreInfoQatar />} />
        <Route path="/simulator-r" element={<Simulator />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
