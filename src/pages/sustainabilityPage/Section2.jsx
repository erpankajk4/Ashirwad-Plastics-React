import img1 from "../../assets/img/sustainibility/3.jpg";
import { FaEnvira } from "react-icons/fa6";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

function Section2() {
  return (
    <section className="md:grid grid-cols-2">
      <motion.div variants={fadeIn("right", "", 0.5, 1)} className="col-span-1 relative">
        <img src={img1} className="w-full h-full object-cover" alt="" />
        <div className="hvr-pulse-grow  hidden md:block p-10 rounded-full bg-[#6A961F] absolute top-1/2 left-full">
          <FaEnvira className="text-white text-5xl" />
        </div>
      </motion.div>
      <motion.div variants={fadeIn("left", "", 0.5, 1)} className="col-span-1 p-[10%] bg-black text-white">
        <motion.h2 variants={fadeIn("left", "", 0.5, 1)}  className="text-5xl font-bold mb-5">Eco-Friendly Materials</motion.h2>
        <motion.p variants={fadeIn("left", "", 0.5, 1)}  className="mb-5">
          We understand the importance of using eco-friendly materials in our
          packaging solutions. That's why we prioritize the use of recyclable
          and biodegradable plastics in our manufacturing processes. By reducing
          reliance on single-use plastics and embracing sustainable
          alternatives, we're working towards a greener future for generations
          to come.
        </motion.p>
        <motion.ul variants={fadeIn("left", "", 0.5, 1)}  className="ml-5">
          <li>Manufacturing with people & the planet in mind.</li>
          <li>
            Optimize the consumption of natural resources in our operations.
          </li>
          <li>Practice 3 R’s: Reuse, Recycle and Reduce</li>
          <li>
            Comply with national, state and local regulations to protect and the
            environment.
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Section2, "Section2");
