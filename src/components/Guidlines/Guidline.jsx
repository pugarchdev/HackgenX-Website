import React from "react";

import { ArrowRight } from "lucide-react";
function Guidline() {
  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Guidelines
        </h2>
        <div className="bg-gray-800 p-8 rounded-lg space-y-6">
          

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Submission Requirements
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                To ensure your project is considered for evaluation, adhere to
                the following submission guidelines:
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <span>
                  Timely Submission: All projects must be submitted before the
                  official deadline. Late submissions will not be considered.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <span>
                  Comprehensive Documentation: Your submission must include
                  proper documentation outlining the project idea, technology
                  stack, installation steps, and usage guidelines. A
                  presentation (slide deck) summarizing the project is also
                  required.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <span>
                  GitHub Repository: The entire source code of the project must
                  be available on GitHub. Ensure that the repository is public
                  and includes a README file with necessary setup instructions.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <ArrowRight className="text-purple-500 w-5 h-5 flex-shrink-0" />
                <span>
                  Working Demo (If Required): If applicable, teams should
                  provide a live demo link or a recorded walkthrough of their
                  project to help judges understand the functionality.
                </span>
              </li>
            </ul>
          </div>
         

        </div>
      </div>
    </section>
  );
}

export default Guidline;
