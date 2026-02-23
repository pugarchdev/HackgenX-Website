import React from 'react'
import {
  Trophy,
  Users,
  Brain,
} from "lucide-react";

/**
 * @returns {JSX.Element}
 */

function Whyparticipate() {
  return (
    
<section id="why-participate" className="py-20 px-6 bg-slate-900">
<div className="max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold text-white text-center mb-16">Why Participate?</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        icon: <Brain className="text-purple-500 w-8 h-8" />,
        title: "Learn & Grow",
        description: "Hackathons provide an incredible opportunity to push your boundaries and step into the world of problem-solving. Gain hands-on experience with the latest technologies, explore innovative ideas, and develop solutions to real-world challenges. Whether you’re a beginner or an experienced coder, this event will help enhance your technical and creative skills through collaboration and mentorship."
      },
      {
        icon: <Users className="text-purple-500 w-8 h-8" />,
        title: "Network & Collaborate",
        description: "Engage with industry experts, experienced mentors, and like-minded innovators from diverse backgrounds. This hackathon is not just about coding; it’s a platform to build valuable connections, learn from professionals, and be a part of a vibrant tech community. Discuss ideas, receive feedback, and explore potential career or startup opportunities."
      },
      {
        icon: <Trophy className="text-purple-500 w-8 h-8" />,
        title: "Win Big & Get Recognized",
        description: "Take your innovative ideas to the next level and compete for exciting prizes worth ₹1,50,000! Stand a chance to showcase your project in front of industry leaders, recruiters, and investors. Winning isn’t just about the prize; it’s about gaining recognition, boosting your portfolio, and potentially launching a future startup or career in tech"
      }
    ].map((item, index) => (
      <div key={index} className="bg-gray-800 p-8 rounded-lg hover:transform hover:-translate-y-1 transition-transform">
        {item.icon}
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">{item.title}</h3>
        <p className="text-gray-400">{item.description}</p>
      </div>
    ))}
  </div>
</div>
</section>
  )
}

export default Whyparticipate;