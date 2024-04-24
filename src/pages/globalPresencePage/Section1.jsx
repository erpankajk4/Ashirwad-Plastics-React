import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";
function Section1() {
  return (
    <section className="w-full md:grid grid-cols-2 px-[10%] py-20">
      <motion.h1
        variants={fadeIn("right", "", 0.5, 1)}
        className="text-5xl font-bold leading-tight col-span-1"
      >
        Striving Towards Connecting More People With
        <span className="text-primaryColor">Our Industrial Excellence</span>.
      </motion.h1>
      <motion.p
        variants={fadeIn("left", "", 0.5, 1)}
        className="text-grey text-justify col-span-1 pl-5"
      >
        Aashirwaad Plastics' global presence is a testament to our commitment to
        excellence, innovation, and customer satisfaction on a global scale.
        With a strong foothold in key markets across the world, we have
        established ourselves as a trusted partner and supplier of high-quality
        plastic products to diverse industries and applications. Our global
        presence is not just about expanding our reach; it's about building
        lasting relationships, fostering collaboration, and making a positive
        impact wherever we go.
        <br  /> <br />
        Our global presence is also influenced by people – our talented team of
        professionals who bring diverse perspectives, expertise, and cultural
        insights to our operations worldwide. With a multicultural workforce
        spanning continents, we embrace diversity and inclusion, recognizing the
        unique strengths and contributions of each individual.
      </motion.p>
    </section>
  );
}

export default SectionWrapper(Section1, "Section1");
