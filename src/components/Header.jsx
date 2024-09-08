import React from "react";
import { FaHome, FaRegHeart } from "react-icons/fa";

import { FiAlignRight } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { setIsClose, setIsOpen } from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Header() {
   const Open = useSelector((state)=>state.cartProduct.isOpen)
      console.log(Open);
      
   const dispatch = useDispatch()
    const toggleState=()=>{
       if(Open){
        dispatch(setIsOpen())
       }else{
        dispatch(setIsClose())
       }
    }
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 ">
        <div className="flex max-w-6xl mx-auto p-5 justify-between items-center">
          <div className="">
            <Link
              to={"/"}
              className="flex justify-center items-center text-2xl"
            >
              <h3 className=" font-semibold">BUYNOW</h3>
              <FaHome className="" />
            </Link>
          </div>
          <div className="flex justify-center items-center gap-5">
            <ul className=" hidden lg:flex md:hidden justify-center items-center gap-3 ">
              <Link
                className=" font-semibold hover:underline border border-gray-500 px-3 hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className=" font-semibold hover:underline border border-gray-500 px-3 hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
                to={"/phone"}
              >
                <span>Phones</span>
              </Link>

              <Link
                className=" font-semibold hover:underline border border-gray-500 px-3 hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
                to={"/earphone"}
              >
                <span>Earphones</span>
              </Link>
              <Link
                className=" font-semibold hover:underline border border-gray-500 px-3 hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
                to={"/airpode"}
              >
                <span>Airpodes</span>
              </Link>
              <Link
                className=" font-semibold hover:underline border border-gray-500 px-3 hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
                to={"/tv"}
              >
                <span>Tv</span>
              </Link>
              <Link
                className=" font-semibold hover:underline border border-gray-500 px-3 hover:bg-black hover:text-white transition-all duration-300 rounded-lg"
                to={"/watch"}
              >
                <span>Watches</span>
              </Link>
            </ul>
            <div className="flex gap-3">
              <div className="flex justify-center items-center gap-1 text-2xl ">
                <FaRegHeart className="text-gray-500" />
                <div className=" relative flex">
                  <Link to={"/cart"}>
                    <GiShoppingCart className="text-3xl" />
                    <span className=" absolute right-0 left-2 bottom-5 bg-red-700 w-5 h-5 rounded-full flex justify-center items-center text-white text-sm">
                      0
                    </span>
                  </Link>
                </div>
              </div>
              <FiAlignRight onClick={toggleState} className="text-3xl sm:block lg:hidden" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
