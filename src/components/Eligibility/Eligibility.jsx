import { CheckCircle } from "lucide-react";
export function Eligibility() {
  return (
    <section className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Eligibility Criteria
        </h2>
        <div className="bg-gray-800 p-8 rounded-lg">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="text-purple-500 w-5 h-5 flex-shrink-0" />
              College Student Requirement – Participants must be currently
              enrolled as undergraduate or graduate students in any recognized
              college or university.
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="text-purple-500 w-5 h-5 flex-shrink-0" />
              Valid Student ID – A valid student identification card (ID) or any
              official proof of enrollment is required for verification during
              registration.
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="text-purple-500 w-5 h-5 flex-shrink-0" />
              
              Team Size – Each team should contain maximum 4 members. Collaborate with your peers to bring innovative ideas to life!
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="text-purple-500 w-5 h-5 flex-shrink-0" />
              
              Teams must select a problem statement from the provided list and build a technical solution.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
