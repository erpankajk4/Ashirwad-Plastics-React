import img1 from "../../assets/img/verified/1.png";
import img2 from "../../assets/img/verified/2.png";
import img3 from "../../assets/img/verified/3.png";
import img4 from "../../assets/img/verified/4.png";
import { SectionWrapper } from "../../hoc";
import { motion } from "framer-motion";
import { zoomIn } from "../../utils/motion";

function VerifiedSection() {
  const img = [img1, img2, img3, img4];
  return (
    <motion.section variants={zoomIn( 0.5, 1)}  className="py-10 px-[10%] grid grid-cols-4 gap-4 flex-wrap">
      {img.map((item, index) => {
        return (
          <div key={index} className="col-span-2 md:col-span-1 corner-hover p-2 flex justify-center items-center">
            <img src={item} alt="" key={index} className=" w-[10rem]" />
          </div>
        );
      })}
    </motion.section>
  );
}

export default SectionWrapper(VerifiedSection, "verified");
