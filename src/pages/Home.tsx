import pix from "../assets/c837a6_412c6d4e5a8f49f1bd70c5a9f60bd99d~mv2.webp";
import pix1 from "../assets/c837a6_3e8310c6d6474d42a3e2925a1f4ed3a3~mv2.webp";
import pix2 from "../assets/c837a6_3a03706bd90e4f289e7aed0d2f11c992~mv2.webp";
import pix3 from "../assets/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpeg";
import pix4 from "../assets/c837a6_8ea5cc0a06664ef6a3c1cf64e1cb5a27~mv2.jpeg";
import pix5 from "../assets/c837a6_ce32dd298b274ba280efa267e075be21~mv2.jpeg";
import pix6 from "../assets/c837a6_2308b08ad22c4e4aa919906536a1b5d1~mv2.jpeg";
import pix7 from "../assets/wix image1.webp";
import pix8 from "../assets/t shop1.webp";
import pix9 from "../assets/t shop 2.webp";
import pix10 from "../assets/t shop 3.webp";
import pix11 from "../assets/t shop 4.webp";
import { IoFlashSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <div className="w-full  h-full">
        <div className="w-full h-[20vh] flex items-center justify-center flex-col">
          <h1 className="font-bold text-[40px]">T SHOP</h1>
          <button className="w-[20%] h-[20%] bg-[#d6ff37]">
            There’s One for Everyone
          </button>
        </div>
        <div className="w-full h-[50vh] bg-slate-50 flex justify-between">
          <div className="w-[27%] h-full bg-slate-200">
            <img src={pix} alt="img" className="w-full h-full  " />
          </div>
          <div className="w-[45%] h-full bg-slate-200">
            <img src={pix1} alt="img" className="w-full h-full" />
          </div>
          <div className="w-[27%] h-full bg-slate-200">
            <img src={pix2} alt="img" className="w-full h-full" />
          </div>
        </div>
        <div className="w-full h-[15vh] flex items-center justify-center">
          <h1 className="font-bold text-[30px]">New Drops</h1>
        </div>
        <div className="w-full h-[55vh]  flex items-center justify-center ">
          <div className="w-[87%] h-full flex justify-between">
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix3} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-light">i'm a product</p>
                <p className="font-light">$15.00</p>
              </div>
            </div>
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix4} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-light">i'm a product</p>
                <p className="font-light">$15.00</p>
              </div>
            </div>
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix5} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-light">i'm a product</p>
                <p className="font-light">$15.00</p>
              </div>
            </div>
            <div className="w-[23%] h-full">
              <div className="w-full h-[85%]">
                <img src={pix6} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-light">i'm a product</p>
                <p className="font-light">$15.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[55vh] flex items-center justify-center mt-3">
          <div className="w-[87%] h-full flex justify-between">
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix7} alt="" className="w-full h-full object-cover" />
                <div className="w-[10%] h-[10%] "></div>
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-light">i'm a product</p>
                <p className="font-light">$15.00</p>
              </div>
            </div>
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix8} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-light">i'm a product</p>
                <p className="font-light">$15.00</p>
              </div>
            </div>
            <div className="w-[23%] h-full ">
              <div className="w-full h-[85%]">
                <img src={pix9} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-light">i'm a product</p>
                <p className="font-light">$15.00</p>
              </div>
            </div>
            <div className="w-[23%] h-full">
              <div className="w-full h-[85%]">
                <img
                  src={pix10}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[15%] ">
                <p className="mt-1 font-light">i'm a product</p>
                <p className="font-light">$15.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[13vh]  flex items-center justify-center">
          <button className="w-[120px] h-[27%] bg-black text-[#d6ff37] font-light text-[12px] text-center">
            Shop New
          </button>
        </div>
        <div className="w-full h-[65vh]  flex justify-between">
          <div className="w-[60%] h-full bg-[#ecffa5] flex items-center justify-center">
            <div className="w-[60%] h-[60%] ">
              <span className="flex justify-center mb-2">
                <IoFlashSharp className="w-[10%] h-[10%] " />
              </span>
              <p className="font-light text-center">SALE IS ON!</p>
              <h1 className="font-black text-[70px] text-center">25% OFF</h1>
              <p className="text-center font-light">
                25% off sitewide using TEES25 at checkout
              </p>
            </div>
          </div>
          <div className="w-[40%] h-full">
            <img src={pix11} alt="img" className="w-full h-full object-fill" />
          </div>
        </div>
        <div className="w-full h-[15vh]  flex items-center justify-center gap-7">
          <span className="">
            <FaLongArrowAltRight className="w-[50px] h-[80px]" />
          </span>
          <h1 className="font-black text-[30px] underline">
            GET 10% OFF YOUR FIRST ORDER!
          </h1>
          <span>
            <FaLongArrowAltLeft className="w-[50px] h-[80px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
