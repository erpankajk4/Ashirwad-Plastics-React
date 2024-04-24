import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { serviceSliderContent } from "../../../data/sliderData";

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ServicesSlider() {
  return (
    <section id="services" className="w-full px-[10%] py-20 bg-[#F3F3F3]">
      <div className="w-full text-center flex flex-col items-center">
        <h1 className="text-5xl font-bold pb-5">Excellence at Every Stage.</h1>
        <p className="text-grey pb-5 text-xl w-3/5">
          From manufacturing to sustainability, quality, and innovation,
          Ashirwad Plastics delivers pharmaceutical packaging solutions with
          unwavering excellence.
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        style={{
          "--swiper-pagination-bullet-border-radius": "0%",
          "--swiper-pagination-bullet-inactive-color": "#2764DD",
          "--swiper-pagination-bullet-active-color": "#2764DD",
          "--swiper-pagination-color": "#2764DD",
          "--swiper-pagination-bullet-horizontal-gap": "12px",
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="servicesSlider"
      >
        {serviceSliderContent.map((i, index) => (
          <SwiperSlide
            key={index}
            className="border-2 border-borderColor text-center bg-white mt-14"
          >
            <div className="w-full relative flex flex-col justify-center items-center p-[10%] ">
              <div className="p-8 w-max bg-primaryColor absolute bottom-full translate-y-[70%] group">
                <img
                  className="w-full object-cover h-10 group-hover:[transform:rotateY(720deg)] transition-all duration-[1s]"
                  src={i?.img}
                  alt="sliding image"
                  loading="lazy"
                />
              </div>
              <div className="w-full h-full flex items-center flex-col pt-14">
                {i.title && (
                  <h2 className="text-xl font-bold mb-8">{i.title}</h2>
                )}
                {i.para && <p className="text-grey">{i.para}</p>}
                {i.link && (
                  <div className="hvr-sweep-to-right-blue p-5 w-full mt-5 border border-borderColor font-bold group">
                    <Link
                      to={i.link}
                      className="w-full flex gap-2 items-center justify-center"
                    >
                      READ MORE{" "}
                      <FaArrowRightLong className="text-primaryColor group-hover:text-white" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
