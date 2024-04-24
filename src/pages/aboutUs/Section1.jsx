import { FaPlay } from "react-icons/fa";
import img1 from "../../assets/img/about/3.jpg";
import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <section className="md:grid grid-cols-2 my-10 mx-[8%]">
      <div className=" col-span-1 relative h-max mr-8">
        <div className="flash-hover">
          <img src={img1} className=" w-full h-full object-cover" alt="" />
        </div>
        <div className="p-8 bg-primaryColor border-[1rem] border-white absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 shadow-xl [box-shadow: 0px 0px 1 20px white]">
          <Link to="#">
            <div className="video-play-button p-5 rounded-full bg-white">
              <FaPlay className="text-primaryColor z-10" />
            </div>
          </Link>
        </div>
      </div>
      <div className="p-5 md:px-[10%] text-justify">
        <h2 className="text-primaryColor text-xl">Know Who We Are</h2>
        <h1 className="text-5xl font-bold mb-5">About Us</h1>
        <p className="text-grey mb-5">
          At Ashirwad Plastics, we are not just manufacturers; we are architects
          of innovation and guardians of quality in the world of pharmaceutical
          packaging. Since our inception in 2018, we have evolved to become a
          beacon of excellence, dedicated to serving the pharmaceutical industry
          through our unwavering commitment to quality, rapid service, and brand
          safety.
        </p>
        <p className="text-grey mb-5">
          Our journey began with the manufacturing of primary plastic packaging
          and liquid dispensing solutions, starting with opthalmic delivery
          system. As the world faced the challenges of the COVID-19 pandemic, we
          stepped up to support the “Make in India” campaign by adding lotion
          pumps and sprayers to our portfolio, contributing to the fight against
          the virus.
        </p>
        <p className="text-grey mb-5">
          Today, Ashirwad Plastics stands at the forefront of innovation,
          offering nasal dispensing solutions and injection seals that uphold
          the integrity of life-saving medicines. Our dedication extends beyond
          borders, serving both institutional sales and international exports as
          part of a pharmaceuticals group. Our commitment to quality has always
          been our driving force. Our initial facility boasted ISO 9001:2015 and
          CE compliance. However, we believe in setting higher standards. With a
          vision to cater to the regulatory market, we are proud to introduce
          our new facility, soon to be ISO 15378:2017 certified, accompanied by
          US DMF, Canada DMF, and CGMP compliance.
        </p>
      </div>
    </section>
  );
}
