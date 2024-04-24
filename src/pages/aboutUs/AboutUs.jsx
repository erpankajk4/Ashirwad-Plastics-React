import { Link } from "react-router-dom";
import { Fragment } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import SEO from "../components/seo";
import img1 from "../../assets/img/about/1.jpg";
import Section1 from "./Section1";
import Testimonials from "../components/Testimonials";
import VerifiedSection from "../components/VerifiedSection";
import MapSection from "../components/MapSection";

export default function AboutUs() {
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
            <h1 className="text-7xl font-bold text-center text-white">
              About Us
            </h1>
            <p className="text-xl text-white md:w-1/2">
            we are not just manufacturers, we are architects of innovation and guardians of quality in the world of pharmaceutical packaging. 
            </p>

            {/* BreadCrumbs  */}
            <div className=" text-white bg-white bg-opacity-30 p-3 ">
              <p className="pr-2">
                <Link className="px-2" to="/">
                  HOME
                </Link>{" "}
                &#8594; ABOUT US
              </p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <Section1 />
          <Testimonials />
          <VerifiedSection />
          <MapSection />
        </section>
      </LayoutOne>
    </Fragment>
  );
}
