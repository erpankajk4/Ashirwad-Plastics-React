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
        Staying Ahead - An Innovative Approach
        <span className="text-primaryColor">future sustainably</span>.
      </motion.h1>
      <motion.p
        variants={fadeIn("left", "", 0.5, 1)}
        className="text-grey text-justify col-span-1"
      >
        Innovation is the lifeblood of Aashirwaad Plastics, driving us forward
        as we strive to redefine what's possible in the world of plastic
        manufacturing. We believe that innovation isn't just about creating new
        products; it's about solving problems, meeting challenges, and making a
        positive impact on the world around us. From revolutionary materials to
        groundbreaking processes, innovation permeates every aspect of our
        business, shaping the way we work, the products we create, and the
        future we envision.
      </motion.p>
    </section>
  );
}

export default SectionWrapper(Section1, "Section1");
