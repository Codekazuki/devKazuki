import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
