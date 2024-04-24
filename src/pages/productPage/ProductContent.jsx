import { SectionWrapper } from "../../hoc";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
function ProductContent({selectedProduct}) {
  return (
    <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
    <div className="flex-1 gap-y-3 flex flex-col">
    {selectedProduct?.text2 && (
      <motion.p variants={fadeIn("left", "", 0, 1)} className="text-grey text-justify">{selectedProduct?.text2}</motion.p>
    )}
    {selectedProduct?.text3 && (
      <motion.p variants={fadeIn("left", "", 0.3, 1)} className="text-grey text-justify">{selectedProduct?.text3}</motion.p>
    )}
    {selectedProduct?.closureSize && (
      <>
        <motion.h2 variants={textVariant()}  className="text-2xl font-bold">Closure SIZES</motion.h2>
        <motion.ul variants={fadeIn("left", "", 0, 1)} className="pl-5">
          {selectedProduct?.closureSize?.map((size, index) => (
            <li key={index}>{size}</li>
          ))}
        </motion.ul>
      </>
    )}
    {selectedProduct?.availableSizes && (
      <>
        <motion.h2 variants={textVariant()}  className="text-2xl font-bold">AVAILABLE SIZES</motion.h2>
        <motion.ul variants={fadeIn("left", "", 0, 1)} className="pl-5">
          {selectedProduct?.availableSizes?.map((size, index) => (
            <li key={index}>{size}</li>
          ))}
        </motion.ul>
      </>
    )}
    {selectedProduct?.features && (
      <>
        <motion.h2 variants={textVariant()}  className="text-2xl font-bold">Features</motion.h2>
        <motion.ul variants={fadeIn("left", "", 0, 1)} className="pl-5">
          {selectedProduct?.features?.map((f, index) => (
            <li key={index}>{f}</li>
          ))}
        </motion.ul>
      </>
    )}
    </div>
    </motion.section>   
  )
}

// export default SectionWrapper(ProductContent, "ProductContent");
export default ProductContent;