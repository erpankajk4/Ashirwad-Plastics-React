import img1 from "../../assets/img/quality/2.jpg";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

function Section3() {
  return (
    <section className="md:grid grid-cols-2">
      <div className="col-span-1 p-[10%] relative">
        <motion.h2 variants={textVariant()} className="text-5xl font-bold mb-5">
          Our Quality Control Process
        </motion.h2>
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mb-5 text-grey"
        >
          Quality begins with the selection of raw materials. We source our
          materials from trusted suppliers who share our commitment to quality
          and reliability. Through rigorous supplier qualification processes and
          ongoing performance monitoring, we ensure that only the highest
          quality materials are used in our production processes. In addition to
          raw materials, we also place a strong emphasis on quality control
          throughout the manufacturing process. Our production facilities are
          equipped with state-of-the-art equipment and technology for quality
          inspection and testing.
        </motion.p>
        <motion.p
          variants={fadeIn("right", "", 0.5, 1)}
          className="mb-5 text-grey"
        >
          Customer satisfaction is the ultimate measure of quality. We
          understand that our success depends on the satisfaction and loyalty of
          our customers. That's why we prioritize customer feedback and strive
          to exceed their expectations with every interaction. Through
          responsive customer service, timely delivery, and proactive
          communication, we aim to build long-lasting relationships based on
          trust, reliability, and mutual respect.
        </motion.p>
        <div className="hvr-pulse-grow  hidden md:block p-10 rounded-full bg-[#6A961F] absolute top-1/2 left-full">
          <MdOutlinePrecisionManufacturing className="text-white text-5xl" />
        </div>
      </div>
      <motion.div
        variants={fadeIn("left", "", 0.1, 1)}
        className="col-span-1 relative"
      >
        <img src={img1} className="w-full h-full object-cover" alt="" />
      </motion.div>
    </section>
  );
}
export default SectionWrapper(Section3, "Section3");
