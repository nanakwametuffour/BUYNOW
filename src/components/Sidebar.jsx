import React from 'react'
import { FaTv } from 'react-icons/fa'
import { ImHeadphones } from 'react-icons/im'
import { MdKeyboardDoubleArrowLeft, MdOutlineWatch } from 'react-icons/md'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setIsClose } from '../redux/cart/cartSlice'

export default function Sidebar() {
  const dispatch = useDispatch()
  const sideState = useSelector((state)=>state.cart.isOpen)
  const sideBarToggle =()=>{
    dispatch( setIsClose())
 }
  return (
    <div className={` top-0 bottom-0 right-0 fixed bg-white shadow-lg w-[300px] z-20 py-10 ${!sideState? "hidden" : "block"} translate-x-8 transform transition-transform`} style={{transition:"transform 0.3s ease"}}>
       <div className="flex justify-center flex-col mt-10 gap-4">
         <div className="flex justify-center  py-5">
          <button onClick={sideBarToggle} className="flex justify-center items-center w-full text-2xl">
            <span className='mt-2'>
            <MdKeyboardDoubleArrowLeft/>
            </span>
            <span>return</span>
            </button>
         </div>
         <div className="flex flex-col justify-center items-center w-full gap-2">
         <Link
                className=" font-semibold flex justify-center items-center gap-1 p-2 w-full hover:bg-black hover:text-white transition-all duration-300 "
                to={"/earphone"}
              >
                 <TfiHeadphoneAlt/>
       
                <span>Earphones</span>
              </Link>
              <Link
                className=" font-semibold flex justify-center items-center gap-1 text-black p-2 w-full hover:bg-black hover:text-white transition-all duration-300 "
                to={"/airpode"}
              >
                 <ImHeadphones/>

                <span>Airpodes</span>
              </Link>
              <Link
                className=" font-semibold flex justify-center items-center gap-1 text-black p-2 w-full hover:bg-black hover:text-white transition-all duration-300 "
                to={"/tv"}
              >
                 <span>
                 <FaTv/>
                 </span>
                <span>Tv</span>
              </Link>
              <Link
                className=" font-semibold flex justify-center items-center gap-1 text-black p-2 w-full hover:bg-black hover:text-white transition-all duration-300 "
                to={"/watch"}
              >
                <MdOutlineWatch/>

                <span>Watches</span>
              </Link>
          </div>
       </div>
      </div>
  )
}

