import React from "react";
import {
  Calendar,
  Trophy,
  Users,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import "../../index.css";
import hackgenx_logo_t from "../../assets/hackgenx_logo_t.png";
import sipnaLogo from "../../assets/sipna_logo.png";

export default function Hero() {
  const registrationOpen = false;
  const registrationEndDate = "15th February, 10 PM";
  <style>@media screen and (max-width)</style>;

  return (
    <section className="pt-8 pb-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* <div>  </div> */}
        <div className="text-purple-500 text-4xl font-semibold  flex flex-col items-center justify-center gap-3 hero-logo-text">
          {/* <img
            src={sipnaLogo}
            alt="Sipna logo"
            height="90px"
            width="90px"
            className="mt-[0rem]"
          /> */}
          <p className="hero-title text-3xl text-center md:text-left md:mb-5">
            SIPNA COLLEGE OF ENGINEERING & TECHNOLOGY, AMRAVATI<br></br>          
          </p>
          <p className="hero-title text-3xl text-center md:text-left md:mb-5">Department Of Computer Science and Engineering </p>
        </div>
        
        <p className="text-white text-2xl text-center mt-[12px] xs:mt-4 sm:mt-[-15px]">
          In association with
        </p>

        {/* <div className="text-white text-2xl">In association with</div> */}
        <div className="text-purple-500 text-3xl font-semibold mt-[15px] mb-3 hero-title">
          PugArch Technology Pvt. Ltd.
        </div>
        <h2 className="text-white text-2xl font-semibold mb-3">Presents</h2>
        {/* <img
              src={hackgenx_logo_t}
              alt="InnovateX"
              className="h-20 w-auto"
            />
        <h2 className="text-purple-500 text-5xl font-semibold">2026</h2>
        </div> */}


        <h2 className="text-6xl font-bold text-white mb-6">
          <img
                        src={hackgenx_logo_t}
                        alt="InnovateX"
                        className="h-20 w-auto inline-block"
                      /> <span className="text-purple-500">2026</span>
        </h2>
        <div className="text-purple-500 text-2xl font-semibold mb-3">
          NATIONAL LEVEL HACKATHON
        </div>
        <div className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          <p>The Ultimate Arena for Innovators</p>
          <p>24 hours of coding, creating, and competing for amazing prizes.</p>
        </div>
        <div
          className="text-purple-500 text-2xl font-semibold mb-3"
          style={{ margin: "25px" }}
        >
          GRAND FINALE on February 26-27,  2026
        </div>
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            registrationOpen
              ? "bg-green-500/10 text-green-400"
              : "bg-red-500/10 text-red-400"
          } mb-6`}
        >
          {registrationOpen ? (
            <CheckCircle size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          Registration {registrationOpen ? "Open" : "Closed"}
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-64 text-center">
            <Users className="text-purple-500 w-8 h-8 mb-3 mx-auto" />
            <h3 className="text-white font-semibold">Team Size</h3>
            <p className="text-gray-400">1-4 Members</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-64 text-center">
            <Calendar className="text-purple-500 w-8 h-8 mb-3 mx-auto" />
            <h3 className="text-white font-semibold">Registration Ends</h3>
            <p className="text-gray-400">{registrationEndDate}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg w-full sm:w-64 text-center">
            <Trophy className="text-purple-500 w-8 h-8 mb-3 mx-auto" />
            <h3 className="text-white font-semibold">Prize Pool</h3>
            <p className="text-gray-400">1,00,000+</p>
          </div>
        </div>

        <div className="flex xs:flex-col  xm:flex-row  flex-nowrap justify-center gap-4">
          {/* <Link to="/registration">
            <button className=" w-full xs:w-full sm:w-auto text-white  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-4 py-3 inline-flex items-center justify-center gap-2 whitespace-nowrap">
              Register Now
            </button>
          </Link> */}

          <Link
            to="/problemstatement" 
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Problem Statements
          </Link>
          {/* <Link to="/masterclass">
            <button
              type="button"
              className=" w-full xs:w-full sm:w-auto text-white  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg px-4 py-3 inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Register for Master Class
            </button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
