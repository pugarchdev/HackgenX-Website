import React from "react";
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Building,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import hackgenx_logo_t from '../../assets/hackgenx_logo_t.png'


function FooterContact() {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-gray-400 py-20 px-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1">
          <h1
            className="text-2xl font-bold text-white flex items-center gap-2"
            style={{ fontFamily: "Horizon" }}
          >

            <img src={hackgenx_logo_t} alt="InnovateX" className="h-13" />
          </h1>
          <p className="mb-4">
            Join us for 24 hours of innovation, creativity, and technology
          </p>

          <Link to="/registration"> <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-4 py-3 rounded-lg font-semibold flex items-center gap-2">
            Register Now <ChevronRight size={20} />
          </button></Link>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Venue</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Building className="text-purple-500" />
              Sipna College Of Engineering And Technology
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="text-purple-500" />
              In front of Nemani Godown, Badnera Road, Amravati-444701
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <Mail className="text-purple-500" />
              hackgenx2026@sipnaengg.ac.in
            </p>
            <p className="flex items-center gap-2">
              <Phone className="text-purple-500" />
              +91 9403169720, +91 9730092389
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <div className="space-y-2">
            <Link to="/#why-participate" className="block hover:text-[#25d8de]">
              Why Participate
            </Link>
            <Link to="/#structure" className="block hover:text-[#25d8de]">
              Structure
            </Link>
            <Link to="/#timeline" className="block hover:text-[#25d8de]">
              Timeline
            </Link>
            <Link to="/#prizes" className="block hover:text-[#25d8de]">
              Prizes
            </Link>
            <Link to="/faq" className="block hover:text-[#25d8de]">
              FAQ
            </Link>
            <Link to="/terms" className="block hover:text-[#25d8de]">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center">
        <p>© 2026 HackgenX Hackathon. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterContact;