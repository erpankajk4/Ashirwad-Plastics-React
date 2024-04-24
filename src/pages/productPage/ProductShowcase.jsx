import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
export default function ProductShowcase({sliderImages}) {
  // console.log(sliderImages);
  return (
    <Swiper
    style={{
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#2764dd",
      "--swiper-pagination-bullet-border-radius": "0%",
      "--swiper-pagination-bottom": "1%"
    }}
    lazy={true}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 4500,
      disableOnInteraction: false,
    }}
    loop={true}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation, EffectFade]}
    effect="fade"
    id="productShowcase"
    className="w-full mb-5"
  >
    {sliderImages?.map((i, index) => (
      <SwiperSlide key={index}>
        <div className="relative">
          <img
            className="w-full h-[423px] object-cover object-center"
            src={i}
            alt={`Sliding image ${index}`}
            loading="lazy"
          />
        </div>
        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
      </SwiperSlide>
    ))}
  </Swiper>
  );
}
