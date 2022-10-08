import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MoreInfoQatar from "../pages/MoreInfoQatar";
import WorldCupInformation from "../pages/WorldCupInformation";
import Simulator from "../pages/Simulator";
import Layout from "../layout/Layout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<WorldCupInformation />} />
        <Route path="more-info-qatar" element={<MoreInfoQatar />} />
        <Route path="simulator" element={<Simulator />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
