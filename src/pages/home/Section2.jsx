import React from "react";
import { FaArrowRightLong, FaSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { fadeIn, slideIn, textVariant } from "../../utils/motion";
import Carousel from "../../common/Carousel";

function Section2() {
  return (
    <section className="w-full p-5 md:px-[10%] md:grid grid-cols-12 overflow-x-hidden">
      <div className="col-span-8">
        <motion.div variants={textVariant()}>
          <h1 className="text-2xl font-medium text-grey mb-5">About Us</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 md:leading-[4rem]">
            Striving Towards Connecting More People With Our Industrial
            Excellence
          </h2>
        </motion.div>
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mb-5 text-grey"
        >
          We have a vast experience of running a successful pharmaceutical
          business of products like ointment, capsules, tablet, oral liquids and
          injections. We are proud to announce our expansion into the new
          horizon of liquid dispensing and packaging.
        </motion.p>
        <motion.p
          variants={fadeIn("right", "", 0.5, 1)}
          className="mb-10 text-grey"
        >
          Our firm is CE complied and ISO Certified which was incorporated in
          2018. From manufacturing Eye/Ear Dropper Bottles (3 piece bottles) to
          the expansion of our operations into the Injection Seals, Dispenser
          Pumps, Flip Top Caps and Trigger Pumps, we have satisfied customers in
          the industry.
        </motion.p>
        <motion.button
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex items-center font-bold text-white transition-all bg-primaryColor "
        >
          <Link
            className=" hvr-sweep-to-right flex justify-center items-center p-4"
            to={"/about-us"}
          >
            <p className="font-bold mr-3">READ MORE ABOUT US</p>
            <FaArrowRightLong />
          </Link>
        </motion.button>
      </div>
      {/* Vision */}
      <motion.div
        variants={fadeIn("left", "", 0.5, 1)}
        className="col-span-4 flex-center"
      >
        <div className="bg-[#F6F6F6] p-5 md:max-w-[350px] mt-5">
          {/* Note: givimg min-w-full is neccessary to each slide */}
          <Carousel autoSlide={true}>{slides}</Carousel>
        </div>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Section2, "about");

const slides = [
  <div className="slide min-w-full min-h-[200px]" key="1">
    <h5 className="text-3xl font-bold flex items-center gap-2">
      <FaSquare className="text-primaryColor text-sm" />
      OUR VISION
    </h5>
    <p className="text-grey">
      Our vision is to provide you with the most innovative products of
      exceptional performance and value. We believe in doing business the right
      way and creating positive results for all our consumers and stakeholders.
    </p>
  </div>,
  <div className="slide min-w-full" key="2">
    <h5 className="text-3xl font-bold flex items-center gap-2">
      <FaSquare className="text-primaryColor text-sm" />
      OUR Mission
    </h5>
    <p className="text-grey">
      To pioneer advancements in pharmaceutical packaging, ensuring safety,
      quality, and sustainability. Our mission is to innovate relentlessly,
      serving as trusted guardians of global health.
    </p>
  </div>,
];
