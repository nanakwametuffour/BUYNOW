import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import all_products from "../assets/all_products";

export default function TopSlider() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
      };
      

  return (
   
      <div className="">
         <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        centerMode={false}
        arrows={false}
        transitionDuration={1000}
      >
        {all_products?.map((item) => (
          <div key={item.id} className=" p-5 flex items-center justify-center">
            <div className="flex justify-center items-center gap-1 border  p-1 border-gray-300 rounded-lg px-3">
              <div className="flex  justify-center items-center gap-1 px-3">
                <img
                  src={item.image}
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                />
                <p className=" whitespace-nowrap capitalize">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      </div>
      
   
  );
}
