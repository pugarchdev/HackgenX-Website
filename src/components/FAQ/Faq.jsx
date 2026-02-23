import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: " 📌 What is the structure of the competition?",
      answer: `• Round 1: Screening Round – Initial idea submission and evaluation.
      • Round 2: Development Round – 24 hours of intense coding and project development.
      • Round 3: Final Presentation – 6 hours for final refinements and pitching to the judges.
`,
    },
    {
      question: "👨‍💻  Who can participate?",
      answer: `The hackathon is open to students, and developers who have a passion for technology and innovation.`,
    },
    {
      question: "👥 What is the team size requirement?",
      answer: "Teams can have maximum 4 members. Solo participants are allowed.",
    },
    {
      question: "🏆 What are the prizes?",
      answer: "Participants will compete for prizes worth 1,00,000, along with certificates, industry recognition, and potential internship/job opportunities.",
    },
    {
      question: "🌍 Can I participate remotely?",
      answer: "No, this is an in-person hackathon only. All team members must be physically present at the venue.",
    },
    {
      question: "📆 What are the important dates?",
      answer: "The hackathon schedule includes registration deadlines, screening round submissions, and competition dates. Ensure you check the official announcement for specific timelines.",
    },
    {
      question: "💡 Can I work on a pre-existing project?",
      answer: "No, all projects must be developed from scratch during the competition to ensure fairness and creativity.",
    },
    {
      question: "🛠 What technologies can we use?",
      answer: "Participants are free to use any programming language, framework, or tool that suits their project needs. Some sponsors may provide APIs and tools to integrate into your project.",
    },
    {
      question: "🔍 How will the projects be evaluated?",
      answer: `• Innovation – Uniqueness and creativity of the idea.
• Functionality – How well the project solves the problem.
• Technical Implementation – Code quality and efficiency.
• Presentation – How well the project is pitched to the judges.`,
    },
    {
      question: "📢 How do we present our project?",
      answer: "Teams will have a fixed time slot during the Final Presentation Round to showcase their project. A working demo is highly recommended.",
    },
    {
      question: "🏠 Will accommodation be provided?",
      answer: "For participants traveling from outside the city, limited accommodation may be arranged. Contact the organizers in advance to confirm availability.",
    },
    {
      question: "🍔 Will food and refreshments be provided?",
      answer: "Yes, meals and refreshments will be provided to participants during the hackathon.",
    },
    {
      question: "🔌What should I bring to the competition?",
      answer: `• Laptop & Charger
• Student/ID Proof
• Any additional hardware required for their project
`,
    },
    {
      question: "💲Is there a registration fee?",
      answer: "Participation is free but after the screening round if you get selected you'll have to pay 1000 rupees spot confirmation fee.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-800 mt-[10vh]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Frequently Asked Questions
        </h2>
        {/* <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-xl font-semibold text-white mb-2 flex items-center gap-2 w-full text-left"
              >
                {openIndex === index ? (
                  <ChevronUp className="text-purple-500" />
                ) : (
                  <ChevronDown className="text-purple-500" />
                )}
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="text-gray-300 ml-8 whitespace-pre-line">{faq.answer}</p>
              )}
            </div>
          ))}
        </div> */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="text-xl font-semibold text-white mb-2 flex justify-between items-center w-full text-left"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-500" />
                ) : (
                  <ChevronDown className="text-purple-500" />
                )}
              </button>
              {openIndex === index && (
                <p className="text-gray-300 ml-8 whitespace-pre-line">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
