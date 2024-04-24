import img1 from "../../assets/img/global/3.jpg";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

function Section3() {
  return (
    <section className="md:grid grid-cols-2">
      <div className="col-span-1 p-[10%] relative">
        <motion.h2 variants={textVariant()} className="text-5xl font-bold mb-5 leading-[4rem]">
          Community Engagement and Social Responsibility
        </motion.h2>
        <motion.p
          variants={fadeIn("right", "", 0.1, 1)}
          className="mb-5 text-grey"
        >
          From major metropolitan areas to remote regions, our extensive
          distribution network enables us to meet diverse customer needs and
          preferences, delivering timely and reliable solutions that exceed
          expectations. With a customer-centric approach and a focus on
          responsiveness and flexibility, we strive to build long-lasting
          relationships with customers worldwide, earning their trust and
          loyalty through superior service and support.
        </motion.p>
        <motion.p
          variants={fadeIn("right", "", 0.5, 1)}
          className="mb-5 text-grey"
        >
          Our Global Presence is all about making a positive impact in the
          communities where we operate. We believe in being responsible
          corporate citizens and giving back to society. Whether it's supporting
          local employment, investing in community development projects, or
          promoting environmental sustainability initiatives, we are committed
          to making a meaningful difference in the lives of people and the
          planet.
        </motion.p>
        <motion.p
          variants={fadeIn("right", "", 0.5, 1)}
          className="mb-5 text-grey"
        >
          Through our corporate social responsibility programs, we aim to create
          shared value, foster social inclusion, and contribute to the
          well-being and prosperity of communities around the world.
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
