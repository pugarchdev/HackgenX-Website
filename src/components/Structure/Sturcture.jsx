import React from "react";

function Sturcture() {
  return (
    <section id="structure" className="py-20 px-6 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Competition Structure
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Round 1: Screening Round
            </h3>
            <p className="text-gray-300">
              <b className="text-white">📌 Objective:</b> Shortlist the most
              promising teams for the competition.
            </p>
            <p className="text-gray-300">
              <b className="text-white"> 🕒 Deadline:</b>18th February, 10 PM
            </p>
            <h3 className="text-white">
              <b>📄 &nbsp;Details:</b>
            </h3>

            <div className="text-gray-300 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>
                  Teams will submit their project ideas along with a brief
                  proposal.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>
                  The proposal should include the problem statement, proposed
                  solution, and expected impact.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>
                  Judges will review submissions based on creativity,
                  feasibility, and innovation.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>
                  Only selected teams will proceed to the Development Round.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Round 2: Development (Offline)
            </h3>
            <p className="text-gray-300">
              <b className="text-white">📌 Objective:</b> Transform the idea
              into a working prototype.
            </p>
            <p className="text-gray-300">
              <b className="text-white"> 🕒 Duration:</b> Submission-based 24
              hours
            </p>
            <p className="text-gray-300">
              <b className="text-white"> 📍 &nbsp;&nbsp;Venue:</b> Sipna College
              Of Engineering And Technology, Amravati
            </p>
            <h3 className="text-white">
              <b>📄 &nbsp;Details:</b>
            </h3>
            <div className="text-gray-300 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>Teams will code, design, and build their project.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>
                  Mentors will be available for technical guidance and
                  troubleshooting.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>Regular checkpoints will be conducted to track progress.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>
                  By the end of this round, teams should have a functional
                  prototype ready for presentation.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gray-700 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Round 3: Final Presentation (Offline)
            </h3>
            <p className="text-gray-300">
              <b className="text-white">📌 Objective:</b> Showcase the final
              project to the judges.
            </p>
            <p className="text-gray-300">
              <b className="text-white"> 🕒 Duration:</b> 2 hours
            </p>
            <p className="text-gray-300">
              <b className="text-white"> 📍 &nbsp;&nbsp;Venue:</b> Sipna College
              Of Engineering And Technology, Amravati
            </p>
            <h3 className="text-white">
              <b>📄 &nbsp;Details:</b>
            </h3>

            <div className="text-gray-300 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>
                  Each team will have a total of 12 minutes to present their
                  project.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>4 minutes for delivering a structured pitch.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>3 minutes to showcase the working prototype</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p> 5 minutes for a Q&A session with the judges. </p>
              </div>
              <div className="flex items-start gap-2">
                <p className="font-semibold text-white">
                  The presentation should highlight key aspects such as:
                </p>
              </div>
              {/* <h3 className="text-white">
                <b>such as: </b>
              </h3> */}
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>Problem-solving approach</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p> Innovation and creativity </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p> Technical execution and feasibility </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p> Scalability and future potential </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>
                  {" "}
                  Live demos are encouraged to demonstrate the functionality of
                  the project.{" "}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-500">•</span>
                <p>
                  {" "}
                  Judges will evaluate based on impact, implementation, and
                  originality before selecting the winners.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sturcture;
