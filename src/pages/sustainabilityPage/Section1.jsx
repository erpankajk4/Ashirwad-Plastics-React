import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
function Section1() {
  return (
    <section className="w-full md:grid grid-cols-2 px-[10%] py-20">
      <motion.h1 variants={fadeIn("right", "", 0.5, 1)} className="text-5xl font-bold leading-tight col-span-1">
        Innovating with integrity, packaging the{" "}
        <span className="text-primaryColor">future sustainably</span>.
      </motion.h1>
      <motion.p variants={fadeIn("left", "", 0.5, 1)} className="text-grey text-justify col-span-1">
        At Ashirwad Plastics, sustainability is our cornerstone. We're dedicated
        to crafting eco-friendly packaging solutions that lead the way towards a
        greener future. Our commitment to innovation and integrity drives every
        aspect of our operations. From using recyclable materials to minimizing
        waste, we're making conscious choices for the planet. Join us in our
        journey towards sustainability, where every package tells a story of
        environmental responsibility. Together, let's shape a tomorrow where
        packaging meets the highest standards of sustainability.
      </motion.p>
    </section>
  );
}

export default SectionWrapper(Section1, "Section1");