import React from "react";
import { FaHome } from "react-icons/fa";
import { FiChevronsRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIsClose, setIsOpen } from "../redux/cart/cartSlice";

export default function Sidebar() {
  
  return (
    <div
      className={` absolute right-0 z-20 w-[300px] h-screen bg-white shadow-lg"
        `}
    >
      <div className="flex px-10 py-5">
        <div className=" flex justify-between items-center w-full ">
          <Link to={"/"}>
            <FaHome className="text-2xl active:scale-110" />
          </Link>
          <FiChevronsRight
           
            className="text-3xl cursor-pointer active:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
