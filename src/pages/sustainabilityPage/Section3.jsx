import img1 from "../../assets/img/sustainibility/2.jpg";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { SectionWrapper } from "../../hoc";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

function Section3() {
  return (
    <section className="md:grid grid-cols-2">
      <div className="col-span-1 p-[10%] relative">
        <motion.h2 variants={textVariant()} className="text-5xl font-bold mb-5">Products with Purpose</motion.h2>
        <motion.p variants={fadeIn("right", "", 0.1, 1)} className="mb-5 text-grey">
          With outburst of global pandemic, we rose to the challenge of
          supporting our customers, partners and responsibility to society —
          ensuring the continuity of our products, which dispense the solutions
          that millions of people rely on every day.
        </motion.p>
        <motion.p variants={fadeIn("right", "", 0.5, 1)}  className="mb-5 text-grey">
          We saw an increase in demand for our pumps and closures used on
          sanitizers and cleaners. As a result, we made arrangements to meet
          sanitizing and cleansing demand during the pandemic.
        </motion.p>
        <motion.p variants={fadeIn("right", "", 1, 1)}  className="mb-5 text-grey">
          We develop and manufacture a variety of dispensers and closures that
          are used to help fight the spread of germs, improve personal hygiene
          and support home cleaning. During these challenging times of the
          pandemic, we have worked closely with our customers serving these
          markets to supply products that are essential to minimize the
          transmission of the COVID-19 virus.
        </motion.p>
        <div className="hvr-pulse-grow  hidden md:block p-10 rounded-full bg-[#6A961F] absolute top-1/2 left-full">
          <MdOutlinePrecisionManufacturing className="text-white text-5xl" />
        </div>
      </div>
      <motion.div variants={fadeIn("left", "", 0.1, 1)}  className="col-span-1 relative">
        <img src={img1} className="w-full h-full object-cover" alt="" />
      </motion.div>
    </section>
  );
}
export default SectionWrapper(Section3, "Section3");
