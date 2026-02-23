// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import hackgenx_logo_t from '../../assets/hackgenx_logo_t.png'

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (

// <header className="fixed top-0 left-0 w-full bg-[#10182B] text-white shadow-lg z-50">
//   {/* Navbar */}
//   <nav className="p-4 flex justify-between items-center">
//     <Link to={'/'}>
//       <h1
//         className="text-2xl font-bold text-white flex items-center gap-2"
//         style={{ fontFamily: "Horizon" }}
//       >
//         <img src={hackgenx_logo_t} alt="InnovateX" className="h-16 w-auto" />
//       </h1>
//     </Link>

//     <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//       {menuOpen ? <X size={30} /> : <Menu size={30} />}
//     </div>

//     <ul className="hidden md:flex gap-8 font-semibold">
//       <Link to="/#why-participate" className="text-gray-300 hover:text-white">
//         Why Participate
//       </Link>
//       <Link to="/#structure" className="text-gray-300 hover:text-white">
//         Structure
//       </Link>
//       <Link to="/#timeline" className="text-gray-300 hover:text-white">
//         Timeline
//       </Link>
//       <Link to="/#prizes" className="text-gray-300 hover:text-white">
//         Prizes
//       </Link>
//       <Link to="/#contact" className="text-gray-300 hover:text-white">
//         Contact
//       </Link>
//       <Link to="/faq" className="text-gray-300 hover:text-white">
//         FAQ
//       </Link>
//     </ul>
//   </nav>

//   {/* Mobile Menu */}
//   {menuOpen && (
//     <ul className="md:hidden flex flex-col text-white p-4 gap-4 bg-gray-900">
//       <Link to="/#why-participate" className="text-gray-300 hover:text-white">
//         Why Participate
//       </Link>
//       <Link to="/#structure" className="text-gray-300 hover:text-white">
//         Structure
//       </Link>
//       <Link to="/#timeline" className="text-gray-300 hover:text-white">
//         Timeline
//       </Link>
//       <Link to="/#prizes" className="text-gray-300 hover:text-white">
//         Prizes
//       </Link>
//       <Link to="/#contact" className="text-gray-300 hover:text-white">
//         Contact
//       </Link>
//       <Link to="/faq" className="text-gray-300 hover:text-white">
//         FAQ
//       </Link>
//     </ul>
//   )}
// </header>
//   );
// }

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import hackgenx_logo_t from "../../assets/hackgenx_logo_t.png";
import pptTemplate from '../../assets/PPT_template_Hackgenx.pptx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  // Function to check scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[#0f172A]   text-white z-50 transition-shadow duration-300 ${hasShadow ? "shadow-lg" : "shadow-none"
        }`}
    >
      {/* Navbar */}
      <nav className="p-4 flex justify-between items-center">
        <Link to={"/"}>
          <h1
            className="text-2xl font-bold text-white flex items-center gap-2"
           
          >
            <img
              src={hackgenx_logo_t}
              alt="InnovateX"
              className="h-16 w-auto"
            />
          </h1>
        </Link>

        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>

        <ul className="hidden md:flex gap-8 font-semibold items-center">

          {/* <Link to="/masterclass" className="text-gray-300 hover:text-white">
            MasterClass
          </Link> */}
          <a
            href="https://forms.gle/8bw14fUtYXmiBr616"
            target="_blank"
            download
            className="flex items-center"
          >
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              PPT submission
            </button>
          </a>
          <a
            href={pptTemplate}
            download
            className="flex items-center"
          >
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Sample PPT Template
            </button>
          </a>
          <Link to="/#contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link to="/faq" className="text-gray-300 hover:text-white">
            FAQ
          </Link>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col text-white p-4 gap-4 bg-gray-900">

          <a
            href="src/assets/Hack GenX guidelines.docx"
            download
            className="flex items-center"
          >
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Sample PPT for submission
            </button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdjzbjNOC2km0slSNK-2TdQkGPi8DZbPqjNlsUWV97OXkhAVA/viewform?usp=header"
            target="_blank"
            download
            className="flex items-center"
          >
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              PPT submission
            </button>
          </a>
          {/* <Link to="/masterclass" className="text-gray-300 hover:text-white">
            MasterClass
          </Link> */}
          <Link to="/#contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
          <Link to="/faq" className="text-gray-300 hover:text-white">
            FAQ
          </Link>
        </ul>
      )}
    </header>
  );
}
