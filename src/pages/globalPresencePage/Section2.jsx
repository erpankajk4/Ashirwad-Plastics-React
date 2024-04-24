import img1 from "../../assets/img/global/2.jpg";
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
          A Look Into Our Global Presence
        </motion.h2>
        <motion.p variants={fadeIn("left", "", 0.5, 1)} className="mb-5">
          Aashirwaad Plastics has established a strong global presence, with a
          network of customers, partners, and distributors spanning across
          continents. Our commitment to excellence, innovation, and customer
          satisfaction has enabled us to expand our reach and penetrate new
          markets worldwide.
        </motion.p>
        <motion.ul variants={fadeIn("left", "", 0.5, 1)} className="ml-5">
          <li>
            Aashirwaad Plastics has established a strong global presence, with a
            network of customers, partners, and distributors spanning across
            continents. Our commitment to excellence, innovation, and customer
            satisfaction has enabled us to expand our reach and penetrate new
            markets worldwide.
          </li>
          <li>
            While we operate on a global scale, we understand the importance of
            local expertise and market knowledge. That's why we have dedicated
            teams in place in each region to provide localized support,
            understand market dynamics, and tailor our products and services to
            meet the unique needs of each market.
          </li>
          <li>
            Building strong partnerships is essential for success in the global
            marketplace. We collaborate with local distributors, agents, and
            channel partners to expand our reach, enhance our market presence,
            and strengthen our relationships with customers worldwide.
          </li>
          <li>
            Regardless of where our products are sold, we maintain the same high
            standards of quality, safety, and compliance. Our products undergo
            rigorous testing and certification processes to ensure they meet or
            exceed regulatory requirements and industry standards in each
            market.
          </li>
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default SectionWrapper(Section2, "Section2");
