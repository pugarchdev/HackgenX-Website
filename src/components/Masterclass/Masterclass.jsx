import React, { useState } from "react";
import { CheckCircle, ChevronDown, GraduationCap } from "lucide-react";
import { handleMasterClassRegistration } from "../../utils/Api";

const masterClasses = [
  { id: "hackathon", name: "Hackathon Preparation" },
  { id: "icebreaking", name: "Icebreaking Session" },
  { id: "robotics", name: "Robotics & Automation" },
  { id: "tech", name: "Latest Technologies (AI, Machine Learning, etc.)" },
  { id: "security", name: "Cybersecurity Basics" },
  { id: "design", name: "Design Thinking & Innovation" },
  { id: "other", name: "Others" },
];

const experienceLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

function MasterClassRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    age: "",
    classes: [],
    exp: "",
    otherClass: "" 
  });

  const toggleClass = (id) => {
    setFormData((prev) => {
      const classes = [...prev.classes];

      if (classes.includes(id)) {
        return {
          ...prev,
          classes: classes.filter((item) => item !== id),
        };
      }

      if (classes.length < 2) {
        classes.push(id);
        return { ...prev, classes };
      }

      alert("You can only select up to 2 classes.");
      return prev;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleMasterClassRegistration(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 mt-[10vh]">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-[#25d8de]" />
          </div>
          <h2 className="text-3xl font-bold text-white">
            Master Class Registration
          </h2>
          <p className="mt-2 text-gray-400">
            Join our exclusive master classes and enhance your skills
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4 border border-gray-700"
        >
          <div className="space-y-6">
            <InputField
              label="Full Name"
              id="fullName"
              value={formData.fullName}
              setFormData={setFormData}
            />
            <InputField
              label="Email Address"
              id="email"
              type="email"
              value={formData.email}
              setFormData={setFormData}
            />
            <InputField
              label="Phone Number (optional)"
              id="mobileNumber"
              type="tel"
              value={formData.mobileNumber}
              setFormData={setFormData}
              pattern="[0-9]{10}"
              maxLength="10"
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
                if (value.length <= 10) {
                  setFormData((prev) => ({ ...prev, mobileNumber: value }));
                }
              }}
              placeholder="Enter 10-digit mobile number"
            />
            <InputField
              label="Age (optional)"
              id="age"
              type="number"
              min="0"
              max="120"
              value={formData.age}
              setFormData={setFormData}
            />

            {/* Master Classes */}
            {/* <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Master Classes
              </label>
              <div className="space-y-2">
                {masterClasses.map((masterClass) => (
                  <div
                    key={masterClass.id}
                    className="flex items-center p-3 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
                    onClick={() => toggleClass(masterClass.id)}
                  >
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        formData.classes.includes(masterClass.id)
                          ? "border-[#25d8de] bg-[#25d8de]"
                          : "border-gray-500"
                      }`}
                    >
                      {formData.classes.includes(masterClass.id) && (
                        <CheckCircle className="w-4 h-4 text-gray-900" />
                      )}
                    </div>
                    <span className="ml-3 text-gray-300">
                      {masterClass.name}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

<div>
      <label className="block text-sm font-medium text-gray-300 mb-2">
        Preferred Master Classes (Max 2)
      </label>
      <div className="space-y-2">
        {masterClasses.map((masterClass) => {
          const isSelected = formData.classes.includes(masterClass.id);
          return (
            <div key={masterClass.id}>
              <div
                role="checkbox"
                aria-checked={isSelected}
                tabIndex={0}
                className="flex items-center p-3 rounded-md border border-gray-700 cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={() => toggleClass(masterClass.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleClass(masterClass.id);
                  }
                }}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    isSelected ? "border-[#25d8de] bg-[#25d8de]" : "border-gray-500"
                  }`}
                >
                  {isSelected && <CheckCircle className="w-4 h-4 text-gray-900" />}
                </div>
                <span className="ml-3 text-gray-300">{masterClass.name}</span>
              </div>

              {/* Show input field if "Others" is selected */}
              {masterClass.id === "other" && isSelected && (
                <input
                  type="text"
                  placeholder="Enter your preferred class"
                  value={formData.otherClass}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, otherClass: e.target.value }))
                  }
                  className="mt-2 p-2 w-full border border-gray-600 bg-gray-800 text-white rounded-md"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  


            {/* Experience Level */}
            <div>
              <label
                htmlFor="experienceLevel"
                className="block text-sm font-medium text-gray-300"
              >
                Experience Level
              </label>
              <div className="mt-1 relative">
                <select
                  id="experienceLevel"
                  required
                  className="block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm appearance-none px-4 py-3"
                  value={formData.experienceLevel}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      experienceLevel: e.target.value,
                    })
                  }
                >
                  <option value="">Select your experience level</option>
                  {experienceLevels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#25d8de] hover:bg-[#20b8bd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-[#25d8de] transition-colors"
              >
                Register for Master Class
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

// Reusable InputField Component
const InputField = ({
  label,
  id,
  type = "text",
  value,
  setFormData,
  ...props
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-300">
      {label}
    </label>
    <input
      type={type}
      id={id}
      {...props}
      className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-3"
      value={value}
      onChange={(e) =>
        setFormData((prev) => ({ ...prev, [id]: e.target.value }))
      }
    />
  </div>
);

export default MasterClassRegistration;
