import { Link, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import LayoutOne from "../../layouts/LayoutOne";
import SEO from "../components/seo";
import { marketSectors } from "../../data/marketSectors";
import ProductsSection from "../components/HomeSlider/ProductsSection";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
export default function Sustainability() {
  const [selectedSector, setSelectedSector] = useState({});
  const { slug } = useParams();
  useEffect(() => {
    const sector = marketSectors.find((s) => s?.slug === slug);
    setSelectedSector(sector);
  }, [slug]);
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
            src={selectedSector?.img1}
            className="w-full h-[37rem] object-cover object-center"
            alt="banner image"
          />

          {/* Overlay  */}
          <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 flex items-center text-center justify-center flex-col p-5 gap-y-8">
            <h1 className="max-md:text-5xl text-7xl font-bold text-center text-white">
              {selectedSector?.title1}
            </h1>
            <p className="text-xl text-white md:w-1/2">
              {selectedSector?.text1}
            </p>

            {/* BreadCrumbs  */}
            <div className=" text-white bg-white bg-opacity-30 p-3 ">
              <p className="pr-2">
                <Link className="px-2" to="/">
                  HOME
                </Link>{" "}
                &#8594;
                <Link className="px-2" to="#">
                MARKET SECTORS
                </Link>{" "}   
                  &#8594; {`${selectedSector?.title1?.toUpperCase()}`}
              </p>
            </div>
          </div>
        </section>
        <section className="w-full">
          <Section1 sect={selectedSector} />
          <Section2 sect={selectedSector} />
          <Section3 sect={selectedSector} />
        <ProductsSection category={selectedSector?.category}/>     
        </section>
      </LayoutOne>
    </Fragment>
  );
}
