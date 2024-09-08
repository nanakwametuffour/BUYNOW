import React from "react";
import shoppingData from "../assets/all-data";
import { CiStar } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";

export default function Card({item: {image, id, name,new_price,old_price}}) {
  return (
    <div className="py-5">
      <div className="flex h-auto">
        <div className="flex justify-center items-center">
          
            <div
              key={id}
              className="flex justify-center items-center shadow-lg h-auto rounded-lg"
            >
              <div className="flex flex-col gap-3">
                <img
                  src={image}
                  alt=""
                  className="w-full h-auto object-cover hover:-rotate-90 transition-all duration-300"
                />
                <div className="p-3">
                  <div className="flex justify-between items-center">
                    <h4>{name}</h4>
                    <div className="flex">
                      <CiStar className="text-yellow-300" />
                      <CiStar className="text-yellow-300" />
                      <CiStar className="text-yellow-300" />
                      <CiStar className="text-yellow-300" />
                      <CiStar className="" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className=" line-through text-gray-400">
                      ${old_price}
                    </span>
                    <span>${new_price}</span>
                  </div>
                  
                </div>
                <div className="p-2">
                 <button className="flex justify-center items-center w-full bg-black text-yellow-50 rounded-lg p-2">
                    <span>add to cart</span>
                    <MdOutlineShoppingBag/>
                 </button>
                </div>
              </div>
              
            </div>
        </div>
      </div>
    </div>
  );
}
