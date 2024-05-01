import { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

import { useAutoAnimate } from "@formkit/auto-animate/react";

import { navItems } from "../../data/navItems.js";
import Logo from "../Logo.jsx";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);
  const [isNavFixed, setNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      // console.log(scrolled);
      if (scrolled > 110) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function openSideMenu() {
    setSideMenu(true);
  }
  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <nav id="nav-menu" className={`flex flex-wrap md:justify-between px-10 ${isNavFixed ? "fixed top-0 left-0 w-full z-50 bg-white" : ""}`}>
      {/* left side  */}
      <section ref={animationParent} className="flex items-center">
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-7 transition-all">
          {navItems.map((d, i) => (
            <div
              key={i}
              
              className="relative group transition-all"
            >
              <NavLink to={d.link ?? "#"} className="flex cursor-pointer gap-1 items-center group-hover:text-black">
                <span className="text-xl font-bold py-6 px-2 hover:text-primaryColor transition-all duration-500">
                  {d.label}
                </span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </NavLink>

              {/* dropdown */}
              {d.children && (
                <div className="z-10 hidden group-hover:flex absolute left-0 top-[100%] w-auto flex-col gap-1   rounded-lg rounded-tl-none rounded-tr-none bg-white py-3 shadow-md  transition-all">
                  {d.children.map((ch, i) => (
                    <NavLink
                      key={i}
                      to={ch.link ?? "#"}
                      className={({ isActive }) =>`text-xl flex cursor-pointer items-center py-1 pl-2 pr-8 hover:bg-primaryColor ${isActive ? "bg-primaryColor text-white" : ""} hover:text-white`}
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <img src={ch.iconImage} alt="item-icon" />
                      )}
                      {/* item */}
                      <span className="whitespace-nowrap pl-3 ">
                        {ch.label}
                      </span>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* navitems */}
      </section>

      {/* right side data */}
      <section className=" hidden md:flex items-center gap-8">
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          <GoSearch className="text-3xl" />
        </button>
      <Link to="/contact-us">
        <button className="hvr-sweep-to-right flex items-center font-bold text-white px-4 py-4 text-neutral-400 transition-all bg-primaryColor ">
          GET A QUOTE <FaArrowRightLong className="ml-2" />
        </button>
        </Link>
      </section>

      {/* hamburger menu */}
      <section className="text-4xl md:hidden flex justify-between w-full items-center">
        <Logo imageUrl="/assets/img/logo.png" logoClass="logo" />
        <FiMenu onClick={openSideMenu} className="cursor-pointer" />
      </section>
    </nav>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <nav className="z-10 fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>

        <section className="flex  flex-col gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
            <GoSearch />
          </button>

          <button className="w-full max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </nav>
  );
}

function SingleNavItem(d) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      to={d.link ?? "#"}
      className="relative px-2 py-3 transition-all"
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="z-10  w-auto  flex-col gap-1 rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              to={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <img src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
