import img1 from "../../assets/img/2.png";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

function Section1() {
  return (
    <section className="w-full flex flex-col md:flex-row overflow-x-hidden">
    <img  src={img1} alt="" className="flex-1 md:w-1/2 w-full object-cover" />
    <div className="p-[5%] flex-1">
    <motion.div variants={textVariant()}>
      <h1 className="text-2xl font-medium text-grey mb-5">
        See What Our Next Move
      </h1>
      <h2 className="text-5xl font-bold mb-5 leading-[4rem]">
        Future Business Plan
      </h2>
      </motion.div>
      <motion.p variants={fadeIn("left", "", 0.1, 1)} className="text-grey mb-5">
        At Ashirwad Plastics, the future is an exciting canvas waiting to be
        painted with innovation and excellence. Our vision includes achieving
        significant milestones that will elevate our products and services to
        new heights.
      </motion.p>
      <motion.p variants={fadeIn("left", "", 0.5, 1)} className="text-grey mb-5">
        We are diligently working towards obtaining the CGMP (Current Good
        Manufacturing Practices) certificate, ISO 15378:2017 certification, US
        DMF (Drug Master File), and Canada DMF. These certifications are
        emblematic of our commitment to the highest standards of quality and
        compliance, placing us firmly on the path to cater to the regulatory
        market.
      </motion.p>
      <motion.p variants={fadeIn("left", "", 1, 1)}  className="text-grey mb-5">
        Our aspiration is to be a proud participant in the “From India to the
        World” campaign, serving global pharmaceutical needs with distinction.
        Our unwavering commitment to quality and service is aimed at ensuring
        the safety and impeccable presentation of your brand.
      </motion.p>
    </div>
  </section>
  )
}

export default SectionWrapper(Section1, "");
