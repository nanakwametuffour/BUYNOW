import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner from "../assets/banner/bannerData";

export default function Banner() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className=" z-0">
      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={true}
        autoPlay={true}
        centerMode={false}
        transitionDuration={1000}
      >
        {banner?.map((item) => (
          <div key={item.id} className=" p-5 flex items-center justify-center">
            <div className="flex  justify-center items-center gap-1 px-3">
              <img
                src={item.image}
                alt=""
                className="w-full object-cover h-[70%] rounded-xl"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
