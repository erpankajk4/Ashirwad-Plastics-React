import { FaPhoneAlt } from "react-icons/fa";
import { homeProducts } from "../../data/products";
import { Link } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export default function ProductAside({ selectedProduct }) {
  return (
    <aside className="hidden lg:flex flex-col col-span-3">
      <div className="border border-borderColor mb-5">
        <h5 className="bg-primaryColor text-white font-bold p-4 text-2xl">
          Our Products
        </h5>
        <div className="flex flex-col transition-all duration-500">
          {homeProducts.map((product) => (
            <Link to={`/products/${product.slug}`} key={product.id}>
              <p
                className={`p-4 ${
                  selectedProduct.title === product.title
                    ? "bg-grey text-white border"
                    : ""
                } hover:bg-primaryColor hover:text-white border border-borderColor`}
              >
                {product.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-primaryColor text-white">
        <div className="p-5 flex flex-col gap-y-3">
          <h5 className="text-2xl font-bold">LET’S START WORK TOGETHER</h5>
          <p>
            Give us a chance to become your most admired supply chain partner.
          </p>
          <ul>
            <p className="flex items-center gap-4 mb-4">
              <FaPhoneAlt className="text-white" />
              <Link to="tel:+919569461234">+91-9569461234</Link>
            </p>
            <p className="flex items-center gap-4 mb-4">
              <IoMail className="text-white" />
              <Link to="mailto:info@ashirwadplastics.com">
                info@ashirwadplastics.com
              </Link>
            </p>
            <p className="flex items-center gap-4 mb-4">
              <FaLocationDot className="text-white" />
              <Link to="#">Khasra No 06 Solan, Himachal Pradesh</Link>
            </p>
          </ul>
        </div>
        <Link to={"#"}>
          <button className="w-full p-5 bg-black text-white font-bold">
            CONTACT US NOW
          </button>
        </Link>
      </div>
    </aside>
  );
}
