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
        Top-Notch Quality -<span className="text-primaryColor">Guaranteed</span>
        .
      </motion.h1>
      <motion.p
        variants={fadeIn("left", "", 0.5, 1)}
        className="text-grey text-justify col-span-1"
      >
        At Aashirwaad Plastics, quality isn't just a promise; it's a guarantee.
        Our unwavering commitment to excellence is evident in every product that
        bears our name. With stringent quality control measures,
        state-of-the-art manufacturing processes, and a team of skilled
        professionals dedicated to perfection, we ensure that every product
        meets the highest standards of quality and reliability. From raw
        material sourcing to final inspection, we leave no stone unturned in our
        pursuit of top-notch quality. With Aashirwaad Plastics, you can trust
        that you're getting nothing but the best – guaranteed quality.
      </motion.p>
    </section>
  );
}

export default SectionWrapper(Section1, "Section1");
