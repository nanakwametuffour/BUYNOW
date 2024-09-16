import { FaCheckCircle, FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Empty from "./Empty";
import { useEffect, useState } from "react";
import { decrementQty, deleteItem, incrementQty, resetItem } from "../redux/cart/cartSlice";
 
export default function CartItem() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.product);
  const [totalPrice, setTotalPrice]=useState("")
         console.log(totalPrice);
         
    useEffect(()=>{
      let total = 0;
      products.map((item)=>{
        total += item.new_price * item.quantity
        return setTotalPrice(total.toFixed(2))
      })
    }, [products])

  return (
    <div className="w-full bg-white px-10">
      {
        products.length > 0 ? 
     
      <div className="grid grid-cols-1 lg:grid-cols-2 px-1 lg:px-4 mx-auto h-auto py-5 gap-4">
        <div className=" w-full h-full">
          <div className="border-b-[1px] flex justify-between items-center py-2 border-gray-400">
            <h3 className=" font-medium text-2xl">shopping cart</h3>
            <h3 className=" font-normal text-xl">subtittle</h3>
          </div>
          {/* product start here */}
          <div className="h-auto">
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full border-b-[1px] flex justify-between items-center py-2 gap-5 border-gray-400 "
              >
                <div className="w-1/5">
                  <img
                    className="w-full h-auto object-contain hover:rotate-90 hover:scale-110 transition-all duration-300"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-col gap-1">
                    <h2 className=" font-semibold">{item.name}</h2>
                    <p>{item.category}</p>
                    <p>
                      unit price
                      <span className=" font-semibold"> ${item.new_price}</span>
                    </p>

                    <div className="flex items-center w-full gap-3">
                      <p>qty:</p>
                      <button onClick={()=>dispatch(decrementQty(item.id))} className="bg-black text-white p-1 rounded-full">
                        <FaMinus />
                      </button>

                      <span className=" text-2xl">{item.quantity}</span>
                      <button onClick={()=>dispatch(incrementQty(item.id))} className="bg-black text-white p-1 rounded-full">
                        <FaPlus />
                      </button>
                    </div>
                    <button onClick={()=>dispatch(deleteItem(item.id))} className="bg-black text-white p-1 capitalize  rounded-lg active:scale-110 transition-all duration-300">
                      delete item
                    </button>
                  </div>
                </div>
                <div className="flex justify-center mb-4">
                  <p className="font-semibold">
                    ${item.new_price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3">
            <button onClick={()=>dispatch(resetItem())} className=" bg-black w-full p-2 rounded-lg text-white active:scale-110 transition-all duration-300 capitalize">clear cart</button>
          </div>
        </div>
        <div className="w-full h-full flex justify-center py-2 px-4">
          <div className="flex px-6 w-60  flex-col">
            <div className="flex justify-center w-full gap-4">
              <div className="mt-2">
                <FaCheckCircle className=" text-green-600" />
              </div>

              <div className=" flex">
                <p>
                  your offer qualifies for free shipping choose this option at
                  checkout.see details...
                </p>
              </div>
            
            </div>
           
             <div className="flex p-3 gap-1">
              <span className=" font-semibold capitalize">Total:</span>
              <span className="font-semibold"> ${totalPrice}</span>
             </div>
             <button className=" bg-black text-white p-2 rounded-lg active:scale-110 transition-all duration-300 capitalize">proceed to pay</button>
          </div>
        </div>
      </div>
       : <Empty/>
      }
    </div>
  );
}
