import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoreInfoQatar from "../pages/MoreInfoQatar";
import WorldCupInformation from "../pages/WorldCupInformation";
import Simulator from "../pages/Simulator";
import Layout from "../layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WorldCupInformation />} />
          <Route path="more-info-qatar" element={<MoreInfoQatar />} />
          <Route path="simulator-r" element={<Simulator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
