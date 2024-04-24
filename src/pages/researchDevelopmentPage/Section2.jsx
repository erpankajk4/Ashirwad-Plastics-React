import img1 from "../../assets/img/r&d/3.jpg";
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
          A Look Into Our R&D Practices
        </motion.h2>
        <motion.p variants={fadeIn("left", "", 0.5, 1)} className="mb-5">
          At Aashirwaad Plastics, research and development (R&D) are fundamental
          to our success and growth. We recognize that innovation is the key to
          staying competitive in today's dynamic business environment. That's
          why we invest heavily in R&D initiatives aimed at driving
          technological advancements, enhancing product performance, and
          fostering sustainable growth.
        </motion.p>
        <motion.ul variants={fadeIn("left", "", 0.5, 1)} className="ml-5">
          <li>
            <strong>State-of-the-Art Facility:</strong> Our R&D facility is
            equipped with state-of-the-art equipment and resources to support
            cutting-edge research and innovation.
          </li>
          <li>
            <strong>Multidisciplinary Team:</strong> Our R&D team comprises
            experts from various disciplines, including materials science,
            engineering, design, and manufacturing.
          </li>
          <li>
            <strong>New Product Development:</strong> We are constantly
            exploring new ideas and concepts to develop innovative products that
            address emerging market needs and trends.
          </li>
          <li>
            <strong>Continuous Improvement:</strong> Innovation is an ongoing
            journey, not a destination. We are committed to continuous
            improvement in our R&D processes, methodologies, and outcomes.
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Section2, "Section2");
