import { Link } from 'react-router-dom'
import bag from '../assets/emptybag.png'
import { HiArrowLeft } from 'react-icons/hi'

export default function Empty() {
  return (
    <div className=' h-screen flex justify-center items-center py-10 p-5'>
        <div className="flex justify-center items-center h-96 p-5 w-full flex-col ">
            <img src={bag} alt="" className='w-[100%] md:w-[70%] lg:w-[20%] object-cover'/>
            <div className="flex p-5 ">
             <Link to={'/'} className=' flex whitespace-nowrap justify-center items-center gap-1 text-2xl w-full bg-black py-2 rounded-full px-10 text-white active:scale-110 transition-all duration-300'>
             <HiArrowLeft className='mt-1'/>
              <button className=''>continue shopping</button>
             </Link>
          </div>
        </div>
       
    </div>
  )
}
