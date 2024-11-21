import { useState } from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [header, setHeader] = useState([
    // { id: 1, title: "Home", Url: "/", state: false },
    { id: 2, title: "New", Url: "New", state: false },
    { id: 3, title: "women", Url: "/Women", state: false },
    { id: 4, title: "Men", Url: "/Men", state: false },
  ]);
  return (
    <div>
      <div className="w-full h-[90px] ">
        <div className="w-full h-[25px] bg-black flex items- justify-center">
          <p className="text-white text-[12px] mt-1">
            Sale is on! 25% off sitewide using TEES25 at checkout
          </p>
        </div>
        <div className="w-full h-[65px]  flex justify-between border border-black">
          <Link to={"/"}>
            <button className="w-[150px] h-full bg-[#d6ff37] border border-r-black font-bold  text-[20px] cursor-pointer">
              T-SHOP
            </button>
          </Link>
          <div className="w-[50%] h-full flex justify-between">
            <div className="w-[75%] h-full flex items-center border border-r-black gap-16">
              {header.map((el) => (
                <div
                  className=""
                  onMouseEnter={() => {
                    el.state = true;

                    setHeader([...header]);
                  }}
                  onMouseLeave={() => {
                    el.state = false;

                    setHeader([...header]);
                  }}
                >
                  <Link to={el.Url}>{el.title}</Link>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center ">
              <button className="w-[300px] h-[45px] flex gap-2 items-center justify-center ">
                {" "}
                <span>
                  <CgProfile />
                </span>
                <p> Log In</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
