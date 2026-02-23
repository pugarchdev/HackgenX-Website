import React, { useEffect, useRef } from 'react';
import { ScrollText, Building2, Leaf, Database } from 'lucide-react';
import { Target, AlertCircle, CheckCircle2 } from 'lucide-react';

import PropTypes from 'prop-types';

const ProblemStatementPropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  objectives: PropTypes.arrayOf(PropTypes.string).isRequired,
  challenges: PropTypes.arrayOf(PropTypes.string).isRequired,
  outcomes: PropTypes.arrayOf(PropTypes.string).isRequired,
  track: PropTypes.string.isRequired,
};

const problemStatements = [
  {
    id: 1,
    title: "Smart waste bin level monitoring system",
    objectives: [
      "Build a system using sensors (ultrasonic, weight, or image) to monitor how full public bins get, send alerts for collection, and optimize waste collection schedules so bins are collected only when needed.",

    ],
    challenges: [
      "Data Aggregation and Feature engineering- Combining sensor data with other critical business features, such as: Bin location type (Residential, commercial, industrial)",
      "Predictive Modelling – When the bin will get filled, based on historical data.",
      "Designing a method to simulate or ingest real-time sensor data.."
    ],
    outcomes: [
      "Develop an AI model to predict filling of dust bin.",
      "Reduction in False positive rate (Showing dustbin as full even when it is having room for more waste)."
    ],
    track: "Track1: Smart Cities & Infrastructure Optimization"
  },
  {
    id: 2,
    title: "Automatic waste segregation with computer vision",
    objectives: [
      "Create a system that uses image recognition to automatically classify waste (plastic, paper, metal, organic, e waste) and send it to appropriate bins + track contamination (when wrong waste is thrown in wrong bin)."
    ],
    challenges: [
      "Ensuring accurate waste classification is real world scenario.",
      "Integrating the vision model with physical components (camera, bin selection mechanism, sensors, microcontrollers) while keeping latency low and the system reliable in continuous use.",
    ],
    outcomes: [
      "End-to-end smart waste segregation system."
    ],
    track: "Track1: Smart Cities & Infrastructure Optimization"
  },
  {
    id: 3,
    title: "Computer Vision for Industrial Wastewater Quality Monitoring",
    objectives: [
      "Design a computer vision system that continuously monitors the effluent quality of industrial wastewater discharge (e.g., from a treatment plant) by analysing video or image feeds to classify discharge severity (e.g., Clear, Moderate, Pollutant), or predict a quantitative metric like Turbidity or pH based on colour."
    ],
    challenges: [
      "Robust Visual Feature Extraction for Water Quality",
      "Accurately mapping visual data to environmental metrics",
      "Continuous monitoring and Alert reliability"
    ],
    outcomes: [
      "An accurate classification model that image of waste water and outputs safe or unsafe.",
      "Automated effluent quality monitoring system",
      "Enhanced decision-making through data insights."
    ],
    track: "Track2: Environmental Sustainability & AI Monitoring"
  },
  {
    id: 4,
    title: "AI-Powered Leak and Anomaly Detection in Urban Water Infrastructure",
    objectives: [
      "Develop a predictive anomaly detection system that processes real-time water flow, pressure, and acoustic sensor data (simulated) from distribution networks to identify the location and severity of hidden leaks and pipe failures before they lead to major infrastructure damage."
    ],
    challenges: [
      "Multimodal Time-Series Data Fusion.",
      "Early & Reliable Anomaly Detection.",
      "Localization & Severity Estimation.Implementing a real-time alert system for authoritie"
    ],
    outcomes: [
      "Develop a predictive leak and failure detection system.",
      "Actionable Maintenance Intelligence.."
    ],
    track: "Track2: Environmental Sustainability & AI Monitoring"
  },
  {
    id: 5,
    title: "Waste Collection Route Optimization",
    objectives: [
      " Using GPS, GIS mapping, and real time fill data to optimize the routes of garbage trucks: reduce fuel, time, carbon emissions; ensure no area is missed; fairness of service."
    ],
    challenges: [
      "Calculating route for entire fleet of waste bin vehicles.",
      "Predicting garbage flow based on historic data to collect maximum garbage possible."
    ],
    outcomes: [
      `A map showing bins color-coded by fill level (Red/Yellow/Green) and active truck paths that update "on the fly".`
    ],
    track: "Track2: Environmental Sustainability & AI Monitoring"
  },
  {
    id: 6,
    title: "Hospital queue and bed management",
    objectives: [
      "Develop a system that shows real-time hospital bed availability, OPD waiting times and appointment slots."
    ],
    challenges: [
      "Use a moving average algorithm that adjusts in real-time based on the actual completion speed of the last five patients Detecting changes in forest cover and identifying illegal activities."
    ],
    outcomes: [
      "Improved patient experience and reduced waiting time",
      "Better hospital resource utilization."
    ],
    track: "Track3: Intelligent Asset & Resource Management"
  },
  {
    id: 7,
    title: "Smart Public Toilet Monitoring & Maintenance System",
    objectives: [
      "Public toilets often suffer from poor maintenance due to lack of real-time monitoring, leading to unhygienic conditions and low usage. Design a real-time toilet monitoring system."
    ],
    challenges: [
      "Tracks usage, cleanliness, and water availability",
      "Enables citizens to report issues via mobile app.",
      "Alerts municipal staff for timely cleaning and repairs."
    ],
    outcomes: [
      "A smart dashboard visualizing usage of public toilets and maintenance frequency.",
      "Improved cleanliness and faster issue resolution."
    ],
    track: "Track3: Intelligent Asset & Resource Management"
  },
  {
    id: 8,
    title: "Smart Urban Grievance & Service Response System",
    objectives: [
      "Municipal corporations receive thousands of citizen complaints related to waste management, water supply, road damage, streetlights, and sanitation. These complaints are often handled through fragmented systems, leading to delayed resolution, poor transparency, and low citizen trust. Design a centralized, smart grievance management platform."
    ],
    challenges: [
      "Allows citizens to report issues via mobile/web (with photo & location).",
      "Automatically categorizes and prioritizes complaints."
    ],
    outcomes: [
      "Provides performance analytics for municipal departments.",
      "Tracks real-time resolution status.",
      "Improve service delivery efficiency, accountability, and citizen satisfaction in urban governanceEnhanced decision-making through data insights"
    ],
    track: "Track3: Intelligent Asset & Resource Management"
  },
  // {
  //   id: 9,
  //   title: " Enhancing Design Software with AI-Driven Interfaces  ",
  //   objectives: [
  //     "Integrate AI into design software to automate repetitive tasks, allowing designers to focus on creativity. The solution should support multiple input formats-text, speech, images, and design files-to generate or modify designs efficiently.  "
  //   ],
  //   challenges: [
  //     "Enabling AI to interpret diverse input formats, such as textual descriptions, voice commands, images, and CAD/BIM files.  ",
  //     " Ensuring seamless integration with existing design software. ",
  //     "Reducing manual intervention in repetitive design tasks. ",
  //     "Maintaining precision and adherence to industry-specific design standards.  "
  //   ],
  //   outcomes: [
  //     "AI-powered design automation, reducing manual workload. ",
  //     "Enhanced creativity by eliminating repetitive design tasks. ",
  //     " Improved efficiency in design-related industries. ",
  //     "Seamless integration of AI into existing design software."
  //   ],
  //   track: "Track3: Intelligent Asset & Resource Management"
  // }
];

// Removed duplicate declaration of trackIcons

const tracks = [
  " Smart Cities & Infrastructure Optimization",
  "Environmental Sustainability & AI Monitoring",
  "Intelligent Asset & Resource Management"
];

const trackIcons = Object.fromEntries(
  tracks.map((track, index) => [
    `Track ${index + 1}: ${track}`,
    index === 0 ? <Building2 className="w-6 h-6" /> :
      index === 1 ? <Leaf className="w-6 h-6" /> :
        <Database className="w-6 h-6" />
  ])
);

function ProblemStatement() {
  const tracks = Array.from(new Set(problemStatements.map(p => p.track)));
  const trackRefs = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, options);

    trackRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1e293b] overflow-x-hidden scroll-smooth mt-[15vh]">
      <header className="bg-[#25d8de] shadow sticky top-0 ">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3">
            <ScrollText className="w-8 h-8 text-[#1e293b] animate-pulse" />
            <h1 className="text-3xl font-bold text-[#1e293b] text-center">Problem Statements</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="space-y-24">
            {tracks.map((track, trackIndex) => (
              <div
                key={track}
                ref={el => trackRefs.current[trackIndex] = el}
                className="opacity-0 translate-y-10 transition-all duration-1000 ease-out"
              >
                <div className="mb-12 flex justify-center">
                  <div className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25d8de] text-[#1e293b] shadow-xl">
                    {trackIcons[track]}
                    <h2 className="text-2xl font-bold">{track}</h2>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {problemStatements
                    .filter(problem => problem.track === track)
                    .map((problem) => (
                      <div
                        key={problem.id}
                        className="transform transition-all duration-500 hover:scale-[1.02]"
                      >
                        <div className="bg-[#0f172a] rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                          <div className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                              <span className="flex items-center justify-center w-8 h-8 bg-[#25d8de] rounded-full text-[#1e293b] font-bold">
                                {problem.id}
                              </span>
                              <h2 className="text-2xl font-extrabold text-[#25d8de] tracking-tight leading-tight">
                                {problem.title}
                              </h2>
                            </div>

                            <div className="space-y-6">
                              <div className="transform transition-all duration-300 hover:translate-x-2">
                                <div className="flex items-center gap-2 mb-3">
                                  <Target className="w-5 h-5 text-[#25d8de]" />
                                  <h3 className="text-lg font-semibold text-[#25d8de]">Objectives</h3>
                                </div>
                                <ul className="list-disc list-inside text-white space-y-2">
                                  {problem.objectives.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                  ))}
                                </ul>
                              </div>

                              <div className="transform transition-all duration-300 hover:translate-x-2">
                                <div className="flex items-center gap-2 mb-3">
                                  <AlertCircle className="w-5 h-5 text-[#25d8de]" />
                                  <h3 className="text-lg font-semibold text-[#25d8de]">Key Challenges</h3>
                                </div>
                                <ul className="list-disc list-inside text-white space-y-2">
                                  {problem.challenges.map((challenge, index) => (
                                    <li key={index}>{challenge}</li>
                                  ))}
                                </ul>
                              </div>

                              <div className="transform transition-all duration-300 hover:translate-x-2">
                                <div className="flex items-center gap-2 mb-3">
                                  <CheckCircle2 className="w-5 h-5 text-[#25d8de]" />
                                  <h3 className="text-lg font-semibold text-[#25d8de]">Expected Outcomes</h3>
                                </div>
                                <ul className="list-disc list-inside text-white space-y-2">
                                  {problem.outcomes.map((outcome, index) => (
                                    <li key={index}>{outcome}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProblemStatement;