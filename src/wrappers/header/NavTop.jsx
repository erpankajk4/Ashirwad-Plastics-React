import { useEffect, useRef, useState } from "react";
import Logo from "../Logo";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline, IoHomeOutline } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";

export default function NavTop() {
  // const [lan, setLan] = useState("en");
  // const googleTranslateWidgetRef = useRef(null);

  // Initialize the Google Translate script
  // useEffect(() => {
  //   const addScript = document.createElement("script");
  //   addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //   document.body.appendChild(addScript);

  //   // Define the Google Translate initialization function
  //   window.googleTranslateElementInit = () => {
  //     googleTranslateWidgetRef.current = new window.google.translate.TranslateElement(
  //       {
  //         pageLanguage: lan,
  //         includedLanguages: "en,hi",
  //       },
  //       "google_translate_element"
  //     );
  //   };

  //   // Clean up the script on unmount
  //   return () => {
  //     document.body.removeChild(addScript);
  //   };
  // }, []);

  // // Change the language of the Google Translate widget
  // useEffect(() => {
  //   if (googleTranslateWidgetRef.current) {
  //     googleTranslateWidgetRef.current.changeLanguage(lan);
  //   }
  // }, [lan]);

  return (
    <nav className="hidden w-full md:flex flex-wrap items-center justify-between border-b border-borderColor lg:px-10">
      <div className="m-2 lg:m-8">
        <Logo imageUrl="/assets/img/logo.png" logoClass="logo" />
      </div>
      <div className="flex items-center justify-between gap-10 p-8">
        <div className="flex items-center gap-2">
          <FiPhone className="text-4xl text-primaryColor" />
          <div>
            <p className="text-grey">Call Us 24/7</p>
            <p>+91-9569461234</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoMailOutline className="text-4xl text-primaryColor" />
          <div>
            <p className="text-grey">Send Us Mail</p>
            <p>info@ashirwadplastics.com</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IoHomeOutline className="text-4xl text-primaryColor" />
          <div>
            <p className="text-grey">Our Location</p>
            <p>Khasra No 06 Solan, Himachal Pradesh</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineLanguage className="text-4xl text-primaryColor" />
          <div>
            <p className="text-grey">Language</p>
            {/* <select name="language" id="language" value={lan} onChange={(e) => setLan(e.target.value)}> */}
            <select name="language" id="language">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
