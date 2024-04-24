import { FaRegHandshake, FaStar } from "react-icons/fa";
import { testimonials } from "../../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Testimonials() {
  return (
    <section className="w-full my-10 px-[10%]">
      {/* Heading */}
      <div className="flex mb-10 gap-x-5 justify-center">
        <div className="max-md:hidden w-1/3 border-b border-r border-borderColor p-1"></div>
        <h1 className="font-bold text-center tracking-widest text-black">
          WHAT OUR CLIENTS ARE SAYING
        </h1>
        <div className="max-md:hidden w-1/3 border-b border-l border-borderColor p-1"></div>
      </div>
      <div className="md:grid grid-cols-12 gap-6">
        {/* Aside */}
        <div className="max-md:mb-5 bg-primaryColor p-8 text-center text-white col-span-2 flex items-center flex-col">
          <FaRegHandshake className="text-8xl" />
          <h1 className="text-6xl mb-4 font-bold">
            1200<sup>+</sup>
          </h1>
          <p>CUSTOMER</p>
          <p>SATISFACTION</p>
        </div>
        {/* Swiper */}
        <div className="col-span-10" id="testimonials-container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            style={{
              "--swiper-pagination-bullet-border-radius": "0%",
              "--swiper-pagination-bullet-inactive-color": "#2764DD",
              "--swiper-pagination-bullet-active-color": "#2764DD",
              "--swiper-pagination-color": "#2764DD",
              "--swiper-pagination-bullet-horizontal-gap": "8px",
            }}
            lazy={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}      
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index} className="w-full">
                <div className="flex gap-x-3 items-center">
                  <h6 className="font-bold">{t.name}</h6>
                  {/* Rendering stars */}
                  <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <FaStar key={i} className="text-primaryColor" />
                  ))}
                  </div>
                </div>
                  <p className="text-grey mb-5">{t.title}</p>
                  <p className="text-grey italic md:leading-8 text-xl">{t.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
