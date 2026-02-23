import React from "react";
import image from "../../assets/s.jpg";
import image1 from "../../assets/s1.jpg";
import image2 from "../../assets/s2.jpg";
const committeeMembers = [
  {
    name: "Mr. Saurabh Tiwari",
    organization:
      "Vice President (India) (Tech & Sales) –WFR Water Freedom Revolution, St. Petersburg, Russia",
    image: image,
  },
  {
    name: "Mr. Abhijeet Sharmaa",
    organization: "Chief Executive Officer at NITRRFIE Raipur",
    image: image1,
  },
  {
    name: "Rahul Karanagle",
    organization: `Principal Consultant and IT expert,
MIHAN,Nagpur`,
    image: image2,
  },


];

function Speaker() {
  return (

    <div className="bg-[#1a2a5e] py-16 px-4">
      <div className="bg-[#1a2a5e] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our Guest
          </h2>
        </div>
      </div>


      <div className="relative bg-white py-12 pt-24 sm:pt-12 rounded-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          {/* Flex container ensuring 5 items per row */}
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-8 px-4 sm:px-8">
            {committeeMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center w-full sm:w-1/2 lg:w-1/5 relative"
              >
                {/* Image with Overlapping Effect */}
                <div
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#0a0f2c] shadow-lg 
                        mx-auto mb-4 sm:mb-0
                        sm:absolute sm:mt-[-17vh] sm:left-1/2 sm:transform sm:-translate-x-1/2"
                >
                  <img
                    src={member.image}
                    alt={member.name || "Speaker"}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Organization */}
                <div className="w-full sm:pt-24 pb-4">
                  <h3 className="text-lg font-semibold text-[#0a0f2c] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 px-4">
                    {member.organization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Speaker;
