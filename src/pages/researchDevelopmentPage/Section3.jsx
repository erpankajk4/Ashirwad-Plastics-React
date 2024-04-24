import img1 from "../../assets/img/r&d/2.jpg";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

function Section3() {
  return (
    <section className="md:grid grid-cols-2">
      <div className="col-span-1 p-[10%] relative">
        <motion.h2 variants={textVariant()} className="text-5xl font-bold mb-5">
          Innovation Is The Seed To Research and Development
        </motion.h2>
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mb-5 text-grey"
        >
          Innovation is not just about generating ideas; it's about turning
          those ideas into tangible outcomes that deliver value. That's where
          our Development team comes in, translating R&D insights and concepts
          into practical solutions and products that address real-world
          challenges. Through iterative prototyping, testing, and validation,
          our Development team refines and fine-tunes innovations, ensuring that
          they meet customer needs, industry standards, and market demands.
        </motion.p>
        <motion.p
          variants={fadeIn("right", "", 0.5, 1)}
          className="mb-5 text-grey"
        >
          Our R&D efforts extend beyond product development; they also encompass
          process innovation and optimization. We are constantly seeking ways to
          improve efficiency, reduce costs, and enhance sustainability in our
          manufacturing processes. Whether it's streamlining production
          workflows, optimizing material usage, or implementing advanced
          automation technologies, we leverage R&D insights to drive continuous
          improvement and operational excellence throughout our organization.
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
