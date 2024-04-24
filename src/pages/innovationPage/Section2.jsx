import img1 from "../../assets/img/innovation/3.jpg";
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
          Fostering An Innovative Culture
        </motion.h2>
        <motion.p variants={fadeIn("left", "", 0.5, 1)} className="mb-5">
          We believe that staying ahead in today's competitive market requires a
          constant pursuit of new ideas, technologies, and approaches. That's
          why we foster a culture of innovation across our organization,
          encouraging creativity, experimentation, and collaboration at every
          level.
        </motion.p>
        <motion.ul variants={fadeIn("left", "", 0.5, 1)} className="ml-5">
          <li>
            <strong>Research and Development:</strong> Our dedicated research and development
            team is committed to pushing the boundaries of what's possible in
            plastic manufacturing. Through ongoing research, experimentation,
            and prototyping, we explore new materials, processes, and designs to
            drive innovation and stay at the forefront of the industry.
          </li>
          <li>
          <strong>Product Enhancement:</strong> We are constantly seeking ways to improve our existing product lines to better meet the evolving needs of our customers. Whether it's enhancing performance, increasing durability, or introducing new features, we leverage innovative technologies and methodologies to deliver products that offer superior value and functionality.
          </li>
          <li><strong>Market Intelligence:</strong> Staying ahead of market trends and consumer preferences is essential for driving innovation. We invest in market research and analysis to gain insights into emerging trends, customer needs, and competitive landscapes.</li>
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Section2, "Section2");
