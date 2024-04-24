import img1 from "../../assets/img/innovation/2.jpg";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

function Section3() {
  return (
    <section className="md:grid grid-cols-2">
      <div className="col-span-1 p-[10%] relative">
        <motion.h2 variants={textVariant()} className="text-5xl font-bold mb-5">
          Innovation Is The Future
        </motion.h2>
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mb-5 text-grey"
        >
          Central to our innovation strategy is a customer-centric approach that
          places the needs and preferences of our customers at the forefront. We
          listen intently to customer feedback, understand their pain points and
          challenges, and collaborate closely with them to co-create solutions
          that address their unique needs. By aligning our innovation efforts
          with customer priorities, we ensure that our products and services
          deliver tangible value and make a meaningful difference in the lives
          of our customers.
        </motion.p>
        <motion.p
          variants={fadeIn("right", "", 0.5, 1)}
          className="mb-5 text-grey"
        >
          Innovation is also about embracing emerging technologies and trends
          that have the potential to revolutionize our industry. From 3D
          printing and additive manufacturing to artificial intelligence and the
          Internet of Things (IoT), we leverage cutting-edge technologies to
          drive innovation and unlock new possibilities. By staying abreast of
          the latest advancements and investing in emerging technologies, we
          position ourselves at the forefront of innovation, ready to seize
          opportunities and overcome challenges in an ever-evolving landscape.
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
