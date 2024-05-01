import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { homeProducts } from "../../../data/products";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../../../utils/motion";

function ProductsSection({ category }) {
  return (
    <section
      id="products"
      className="servicesSlider w-full px-[10%] py-20 flex flex-col text-center items-center"
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full"
      >
        <motion.div variants={textVariant()} className="w-full flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-5">Our Products</h1>
          <p className="w-full md:w-1/2 text-grey">
            Offering a diverse range of products tailored for various
            industries, ensuring quality and reliability for your specific
            needs.
          </p>
        </motion.div>
      </motion.div>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
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
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="w-full mt-10 transition-all duration-500"
      >
        {homeProducts
          .filter((product) => product?.category.includes(category))
          .map((product, index) => (
            <SwiperSlide
              key={index}
              className="w-full hover:border hover:border-primaryColor hover:p-5"
            >
              <Link to={`/products/${product?.slug}`} className="w-full ">
                <div
                  key={index}
                  className="w-full flex items-center flex-col mb-8"
                >
                  <div className="w-full rounded-full mb-5">
                    <img
                      className="w-full h-full object-cover"
                      src={product?.img}
                      alt="product"
                    />
                  </div>
                  <h6 className="text-xl font-bold">{product?.title}</h6>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default ProductsSection;
