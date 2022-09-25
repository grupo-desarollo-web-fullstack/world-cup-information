import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
