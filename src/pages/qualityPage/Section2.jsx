import img1 from "../../assets/img/quality/3.jpg";
import { FaEnvira } from "react-icons/fa6";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

function Section2() {
  return (
    <section className="md:grid grid-cols-2">
      <motion.div
        variants={fadeIn("right", "", 0.5, 1)}
        className="col-span-1 relative"
      >
        <img src={img1} className="w-full h-full object-cover" alt="" />
        <div className="hvr-pulse-grow  hidden md:block p-10 rounded-full bg-[#6A961F] absolute top-1/2 left-full">
          <FaEnvira className="text-white text-5xl" />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "", 0.5, 1)}
        className="col-span-1 p-[10%] bg-black text-white"
      >
        <motion.h2
          variants={fadeIn("left", "", 0.5, 1)}
          className="text-5xl font-bold mb-5"
        >
          Here’s How We Retain Our Quality
        </motion.h2>
        <motion.p variants={fadeIn("left", "", 0.5, 1)} className="mb-5">
          Quality is the cornerstone of our business philosophy at Aashirwaad
          Plastics. We are dedicated to delivering products of the highest
          quality that consistently meet or exceed customer expectations. Our
          commitment to quality is reflected in every aspect of our operations,
          from product design to after-sales support.
        </motion.p>
        <motion.ul variants={fadeIn("left", "", 0.5, 1)} className="ml-5">
          <li>Strict Standards</li>
          <li>Continuous Improvement</li>
          <li>Customer Satisfaction</li>
          <li>Product Testing</li>
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Section2, "Section2");
