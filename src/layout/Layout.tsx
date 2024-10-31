import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";

const layout = () => {
  return (
    <div className="h-[calc(100%-300px)]">
      <Header />
      <Outlet />
      <div>
        <Footer />
      </div>

      {/* Add your footer here */}
    </div>
  );
};

export default layout;
