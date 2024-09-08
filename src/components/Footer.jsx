import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-slate-950 w-full h-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 p-5 justify-center items-center gap-3 text-sm lg:text-base">
        <div className="text-white flex justify-center items-center flex-col p-2">
          <h1>Customer Services</h1>
          <div className="flex flex-col gap-2">
            <Link>
              <span>Privacy Policy</span>
            </Link>
            <Link>Blog</Link>
            <Link>Solution</Link>
          </div>
        </div>
        <div className="text-white flex justify-center items-center flex-col p-2">
          <h1>About us</h1>
          <div className="flex flex-col gap-2 justify-center items-center">
            <Link>About BUYNOW.com</Link>
            <Link>About Group</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
        <div className="text-white flex justify-center items-center flex-col">
          <h1>Buy On Bestsuppliers.com</h1>
          <div className="flex flex-col justify-center items-center">
            <Link>Send Inquiry</Link>
            <Link>Site Map</Link>
            <Link>Showroom</Link>
          </div>
        </div>
        <div className="text-white flex justify-center items-center flex-col">
          <h1>Discover Products</h1>
           <div className="flex flex-col justify-center items-center">
            <Link>All Categories</Link>
            <Link>Search Products</Link>
            <Link>Join Free</Link>
           </div>
        </div>
      </div>
    </div>
  );
}
