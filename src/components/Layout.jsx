import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

export default function Layout() {
  return (
    <div className="">
    
    <Header/>
    <Outlet/>
     <Footer/>
    </div>
  )
}
