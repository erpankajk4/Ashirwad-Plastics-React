import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
function Section1() {
  return (
    <section className="w-full md:grid grid-cols-2 px-[10%] py-20">
      <motion.h1
        variants={fadeIn("right", "", 0.5, 1)}
        className="text-5xl font-bold leading-tight col-span-1"
      >
        R&D is Our Best Bet Towards A Brighter Future
        <span className="text-primaryColor">future sustainably</span>.
      </motion.h1>
      <motion.p
        variants={fadeIn("left", "", 0.5, 1)}
        className="text-grey text-justify col-span-1"
      >
        No Research and Development is complete without a hint of exploration
        and experimentation, and Aashirwad Plastics has a dedicated team of
        full-time explorers and researchers, more commonly known as our R&D
        Team. Through a combination of theoretical research, empirical testing,
        and hands-on experimentation, we uncover new insights, discover novel
        solutions, and unlock hidden potential that drives innovation and
        propels our business forward.
      </motion.p>
    </section>
  );
}

export default SectionWrapper(Section1, "Section1");
