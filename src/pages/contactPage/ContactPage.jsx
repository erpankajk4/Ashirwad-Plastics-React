import { Link } from "react-router-dom";
import { Fragment } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import SEO from "../components/seo";
import img1 from "../../assets/img/contact/1.jpg";
import Section1 from "./Section1";
import Section2 from "./Section2";
import MapSection from "../components/MapSection";
export default function ContactPage() {
  return (
    <Fragment>
      <SEO
        titleTemplate="Ashirwad Plastics – Liquid Dispensing and Packaging Solutions"
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
              Contact Us
            </h1>
            <p className="text-xl text-white md:w-1/2">
              We offer innovative products and services and make every effort to
              conserve resources for future generations.
            </p>
            {/* BreadCrumbs  */}
            <div className=" text-white bg-white bg-opacity-30 p-3 ">
              <p className="pr-2">
                <Link className="px-2" to="/">
                  HOME
                </Link>{" "}
                &#8594; CONTACT US
              </p>
            </div>
          </div>
        </section>
        <section className="w-full">
            <Section1 />
            <Section2 />
            <MapSection />
        </section>
      </LayoutOne>
    </Fragment>
  );
}
