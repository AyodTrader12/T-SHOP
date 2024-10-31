import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="h-[300px] w-full">
      <div className="w-full h-[80%]  border border-black flex justify-between">
        <div className="w-[30%] h-full bg-black flex items-center justify-center">
          <div className="w-[50%] h-[50%] ">
            <h1 className="font-bold mb-4 text-center text-white text-[20px]">
              T-SHOP
            </h1>
            <p className="text-center text-white mb-1 text-[12px]">
              info@mysite.com
            </p>
            <p className="text-center text-white text-[12px]">
              Tel: 123-456-7890
            </p>
          </div>
        </div>
        <div className="w-[60%] h-full flex items-center justify-center">
          <div className="w-[70%] h-[70%]  flex justify-between">
            <div className="w-[25%] h-full">
              <h1 className="mb-4 font-light">Shop</h1>
              <p className="font-light text-[12px] mb-2">New</p>
              <p className="font-light text-[12px] mb-2">Women</p>
              <p className="font-light text-[12px] mb-2">Men</p>
            </div>
            <div className="w-[25%] h-full ">
              <h1 className="mb-4 font-light ml-2">Our store</h1>
              <p className="font-light text-[12px] mb-2 ml-2">About us</p>
              <p className="font-light text-[12px] mb-2 ml-2">subscribe</p>
              <p className="font-light text-[12px] mb-2 ml-2">FAQS</p>
            </div>
            <div className="w-[25%] h-full">
              <h1 className="mb-4 font-light ml-2">Terms & Conditions</h1>
              <p className="font-light text-[12px] mb-2 ml-2">Store policy</p>
              <p className="font-light text-[12px] mb-2 ml-2">
                shipping & Returns
              </p>
              <p className="font-light text-[12px] mb-2 ml-2">
                Payment Methods
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[20%]  flex justify-between">
        <div className="w-[30%] h-full border-r flex items-center justify-center gap-4">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaYoutube />
          </span>
          <span>
            <FaPinterestP />
          </span>
          <span>
            <FaTiktok />
          </span>
        </div>
        <div className="w-[60%] h-full bg-[#d6ff37] flex items-center justify-center">
          <p className="text-[12px] font-light">
            © 2035 by T Shop. Powered and secured by Wix
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
