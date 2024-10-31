import { IoIosArrowForward } from "react-icons/io";

import { IoIosArrowDown } from "react-icons/io";
import pix1 from "../assets/t shop10.webp";
import pix2 from "../assets/t shop11.webp";
import pix3 from "../assets/t shop12.webp";
import pix4 from "../assets/t shop13.webp";
import pix5 from "../assets/c837a6_412c6d4e5a8f49f1bd70c5a9f60bd99d~mv2.webp";
import pix6 from "../assets/t shop 4.webp";
import pix7 from "../assets/wix image1.webp";
import pix8 from "../assets/t shop14.webp";
const Women = () => {
  return (
    <div>
      <div className="w-full h-full flex gap-3">
        <div className="w-[15%] h-full">
          <div className="flex gap-2 items-center ml-12 mt-5 mb-7 cursor-pointer">
            <p className="font-light">Home</p>
            <span>
              <IoIosArrowForward className="font-light" />
            </span>
            <p className="font-light">Women</p>
          </div>
          <div className="ml-12 mb-10">
            <h1 className="font-light mb-3">Browswe by</h1>
            <hr className="mb-2" />
            <p className="font-light text-[12px] mb-2">All Products</p>
            <p className="font-light text-[12px] mb-2">Men</p>
            <p className="font-light text-[12px] mb-2">New Drops</p>
            <p className="font-light text-[12px] ">Women</p>
          </div>
        </div>
        <div className="w-[80%] h-full">
          <div className="mt-20 mb-5">
            <h1 className="font-black text-[50px]">Women</h1>
          </div>
          <div className="flex justify-between mb-7">
            <div>
              {" "}
              <p className="font-light text-[12px]">8 products</p>
            </div>
            <div className="flex gap-2">
              <p className="font-light text-[12px]">Sort by: Recommended</p>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
          </div>

          <div className="w-full h-[55vh] mb-4 ">
            <div className="w-full h-full flex justify-between">
              <div className="w-[23%] h-full ">
                <div className="w-full h-[85%]">
                  <img
                    src={pix1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[15%] ">
                  <p className="mt-1 font-light text-[12px]">i'm a product</p>
                  <p className="font-light text-[12px]">$15.00</p>
                </div>
              </div>
              <div className="w-[23%] h-full ">
                <div className="w-full h-[85%]">
                  <img
                    src={pix2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[15%] ">
                  <p className="mt-1 font-light text-[12px]">i'm a product</p>
                  <p className="font-light text-[12px]">$15.00</p>
                </div>
              </div>
              <div className="w-[23%] h-full ">
                <div className="w-full h-[85%]">
                  <img
                    src={pix3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[15%] ">
                  <p className="mt-1 font-light text-[12px]">i'm a product</p>
                  <p className="font-light text-[12px] ">$15.00</p>
                </div>
              </div>
              <div className="w-[23%] h-full">
                <div className="w-full h-[85%]">
                  <img
                    src={pix4}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[15%] ">
                  <p className="mt-1 font-light text-[12px]">i'm a product</p>
                  <p className="font-light text-[12px]">$15.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[55vh] mb-7">
            <div className="w-full h-full flex justify-between">
              <div className="w-[23%] h-full ">
                <div className="w-full h-[85%]">
                  <img
                    src={pix5}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[15%] ">
                  <p className="mt-1 font-light text-[12px]">i'm a product</p>
                  <p className="font-light text-[12px]">$15.00</p>
                </div>
              </div>
              <div className="w-[23%] h-full ">
                <div className="w-full h-[85%]">
                  <img
                    src={pix6}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[15%] ">
                  <p className="mt-1 font-light text-[12px]">i'm a product</p>
                  <p className="font-light text-[12px]">$15.00</p>
                </div>
              </div>
              <div className="w-[23%] h-full ">
                <div className="w-full h-[85%]">
                  <img
                    src={pix7}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[15%] ">
                  <p className="mt-1 font-light text-[12px]">i'm a product</p>
                  <p className="font-light text-[12px]">$15.00</p>
                </div>
              </div>
              <div className="w-[23%] h-full">
                <div className="w-full h-[85%]">
                  <img
                    src={pix8}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[15%] ">
                  <p className="mt-1 font-light text-[12px]">i'm a product</p>
                  <p className="font-light text-[12px]">$15.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Women;
