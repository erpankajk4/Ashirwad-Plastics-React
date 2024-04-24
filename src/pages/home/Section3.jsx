import img from "../../assets/img/1.png";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa6";
import { motion } from "framer-motion";
import { zoomIn } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

function Section3() {
  return (
    <section className="w-full my-5">
    <motion.div variants={zoomIn( 0.5, 1)}  className="relative h-max mr-8 flex-center">
      <div className="flash-hover w-[80%]">
        <img src={img} className="w-full object-cover" alt="" />
      </div>
      <div className="video-play-button  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <Link to="#">
          <div className="text-2xl video-play-button p-5 rounded-full bg-white">
            <FaPlay className="text-primaryColor z-10" />
          </div>
        </Link>
      </div>
    </motion.div>
  </section>
  )
}

export default SectionWrapper(Section3, "section3img");
