import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { sliderContent } from "../../../data/sliderData";

import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, sliderText, staggerContainer } from "../../../utils/motion";
import { useEffect, useState } from "react";

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // Incrementing the key when the slide changes to trigger animation restart
    setAnimationKey(animationKey + 1);
  }, [currentSlide]); // Trigger useEffect whenever currentSlide changes

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)} // Update current slide index
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
        className="mySwiper"
      >
        <AnimatePresence>
          {sliderContent.map((i, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-max relative">
                <img
                  className="w-full h-[84vh] md:h-full object-cover object-center"
                  src={i?.img}
                  alt="sliding image"
                  loading="lazy"
                />
                <div className="overlay w-full h-full absolute top-0 left-0 bg-black bg-opacity-40 flex items-center text-white">
                  <motion.div
                    variants={sliderText} // Using the sliderText motion variants
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition="transition"
                    className="md:w-1/2 md:ml-28 flex flex-col max-md:justify-center max-md:items-center max-md:p-[10%] max-md:text-center"
                    key={animationKey} // Force animation restart on key change
                  >
                    {i.welcome && <p>{i.welcome}</p>}
                    {i.title && (
                      <motion.h2 className="md:text-5xl font-bold mb-8 text-3xl">
                        {i.title}
                      </motion.h2>
                    )}
                    {i.para && <p>{i.para}</p>}
                    {i.link && (
                      <div className="hvr-sweep-to-right p-5 bg-primaryColor w-max mt-5">
                        <Link to={i.link}>Learn More</Link>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          ))}
        </AnimatePresence>
      </Swiper>
      {/* Slider Bottom  */}
      <section className=" w-full md:mb-[8rem]">
        <div className="w-full md:max-w-[68%] bg-black md:relative">
          <p className="p-5 md:p-10 md:pl-20 text-white">
            <strong>Join our team</strong> – We are looking for talented &
            driven people to come work with us.{" "}
            <NavLink to="/contact-us">
              <span className="text-primaryColor">Contact Us</span>
            </NavLink>
          </p>
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="z-10 md:absolute md:left-full md:bottom-1/2 md:translate-y-1/2 flex justify-center items-center bg-primaryColor text-white md:min-w-[40%] leading-loose p-14"

          >
            <motion.div
              variants={fadeIn("right", "", 0.1, 1)}
            >
              <div>
                <h3 className="text-4xl font-bold mb-5">
                  Ashirwad Plastics Global Response
                </h3>
                <p className="leading-normal mb-5">
                  At Ashirwad Plastics, we are not just manufacturers; we are
                  architects of innovation and guardians of quality in the world
                  of pharmaceutical packaging.
                </p>
                <button className="hvr-sweep-to-right flex items-center font-bold text-white transition-all bg-primaryColor ">
                  <Link
                    className="flex justify-center items-center p-4 bg-white text-primaryColor"
                    to={"/about-us"}
                  >
                    <FaArrowRightLong />
                  </Link>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
