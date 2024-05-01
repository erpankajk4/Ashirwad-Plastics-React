import Logo from "../Logo";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorldWww } from "react-icons/tb";
function Footer() {
  return (
    <footer className="w-full bg-[#1A191D] text-white">
    <div className="w-full flex justify-evenly gap-10 px-[10%] py-10 max-md:flex-col">
      <div className="flex-1 flex flex-col gap-5">
        <Logo
          imageUrl="/assets/img/logo-white.png"
          logoClass="logo"
        />
        <p className="text-justify pr-10">
          A leading developer of A-grade commercial, industrial and residential
          projects in USA. Since its foundation the company.
        </p>
      </div>
      <div className="flex-1">
        <h4 className="text-2xl font-bold mb-5">Quick Links</h4>
        <ul>
          <Link to="/">
            <li className="hover:text-primaryColor hover:underline">Home</li>
          </Link>
          <Link to="/about-us">
            <li className="hover:text-primaryColor hover:underline">About Us</li>
          </Link>
          <Link to="/market-sectors/cosmetic-industry">
            <li className="hover:text-primaryColor hover:underline">Cosmetic Industry</li>
          </Link>
          <Link to="/market-sectors/pharmaceutical-industry">
            <li className="hover:text-primaryColor hover:underline">Pharmaceutical Industry</li>
          </Link>
          <Link to="/market-sectors/home-care-industry">
            <li className="hover:text-primaryColor hover:underline">Home Care Industry</li>
          </Link>
          <Link to="/contact-us">
            <li className="hover:text-primaryColor hover:underline">Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="flex-1">
        <h4 className="text-2xl font-bold mb-5">Explore Now</h4>
        <ul>
          <Link to="/manufacturing-capabilities">
            <li className="hover:text-primaryColor hover:underline">Manufacturing Capabilities</li>
          </Link>
          <Link to="/sustainability">
            <li className="hover:text-primaryColor hover:underline">Sustainability</li>
          </Link>
          <Link to="/quality">
            <li className="hover:text-primaryColor hover:underline">Quality</li>
          </Link>
          <Link to="#">
            <li className="hover:text-primaryColor hover:underline">Privacy Policy</li>
          </Link>
          <Link to="#">
            <li className="hover:text-primaryColor hover:underline">Terms and Condition</li>
          </Link>
        </ul>
      </div>
      <div className="flex-1">
        <h4 className="text-2xl font-bold mb-5 ">Contact Us</h4>
        <ul>
          <p className="flex items-center gap-4 mb-4 hover:text-primaryColor hover:underline">
            <FaPhoneAlt className="text-grey" />
            <Link to="tel:+919569461234">+91-9569461234</Link>
          </p>
          <p className="flex items-center gap-4 mb-4 hover:text-primaryColor hover:underline">
            <IoMail className="text-grey" />
            <Link to="mailto:info@ashirwadplastics.com">info@ashirwadplastics.com</Link>
          </p>
          <p className="flex items-center gap-4 mb-4 hover:text-primaryColor hover:underline">
            <FaLocationDot className="text-grey" />
            <Link to="#">Khasra No 06 Solan, Himachal Pradesh</Link>
          </p>
          <p className="flex items-center gap-4 mb-4 hover:text-primaryColor hover:underline">
            <TbWorldWww className="text-grey" />
            <Link to="https://www.ashirwadplastics.com">www.ashirwadplastics.com</Link>
          </p>
        </ul>
      </div>
    </div>
    <div className="bg-black w-full py-5 text-center">
    © 2024 ashirwadplastics.com <span className="hidden">Designed by SpriteGenix</span>
    </div>
    </footer>
  );
}

export default Footer;
