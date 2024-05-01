import { Link } from "react-router-dom";
import { Fragment } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import SEO from "../components/seo";
import img1 from "../../assets/img/manufacturing/1.jpg";
import Section1 from "./Section1";
import Section2 from "./Section2";
import VerifiedSection from "../components/VerifiedSection";
import ProductsSection from "../components/HomeSlider/ProductsSection";

export default function ManufacturingPage() {
  return (
    <Fragment>
      <SEO
        title="Ashirwad Plastics"
        titleTemplate="Manufacturing Capabilities"
        description="Ashirwad Plastics – Liquid Dispensing and Packaging Solutions"
      />
      <LayoutOne>
        {/* Banner Section  */}
        <section className="w-full relative">
          <img
            src={img1}
            className="w-full h-[37rem] object-cover object-center"
            alt="banner image"
          />

          {/* Overlay  */}
          <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 flex items-center text-center justify-center flex-col p-5 gap-y-8">
            <h1 className="max-md:text-5xl text-7xl font-bold text-center text-white">
              Manufacturing Capabilities
            </h1>
            <p className="text-xl text-white md:w-1/2">
              Manufacturing practices that make the world a better place with
              the help of automation.
            </p>

            {/* BreadCrumbs  */}
            <div className=" text-white bg-white bg-opacity-30 p-3 ">
              <p className="pr-2">
                <Link className="px-2" to="/">
                  HOME
                </Link>{" "}
                &#8594; MANUFACTURING CAPABILITIES
              </p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <Section1 />
          <Section2 />
          <VerifiedSection />
          <ProductsSection category="all" />
        </section>
      </LayoutOne>
    </Fragment>
  );
}
