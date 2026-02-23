import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../utils/Api.js";
import Guidelines from "../Guidelines/Guidelines";
import { Link } from "react-router-dom";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    teamName: "",
    teamSize: "",
    college: "",
    branch: "",
    city: "",
    problemStatement: "",
    whyParticipate: "",
    acceptTerms: false,
  });
  const handleMasterClassRegistration = () => {
    // Navigate to master class registration page
    window.location.href = "/masterclass-registration"; // Replace with actual URL
  };
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters long";
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.teamName.trim().length < 3) {
      newErrors.teamName = "Name must be at least 3 characters long";
    }

    if (!formData.teamSize) {
      newErrors.teamSize = "Please select a team size";
    }

    if (formData.college.trim().length < 3) {
      newErrors.college = "Please enter a valid college name";
    }

    if (formData.branch.trim().length < 2) {
      newErrors.branch = "Please enter a valid branch name";
    }

    if (formData.city.trim().length < 2) {
      newErrors.city = "Please enter a valid city name";
    }

    if (!formData.problemStatement) {
      newErrors.problemStatement = "Please select a problem statement";
    }

    if (formData.whyParticipate.trim().length < 10) {
      newErrors.whyParticipate = "Please provide at least 10 characters";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      const response = await registerUser(formData);

      // ✅ Handle Success Response
      if (!response.error) {
        toast.success(response.message || "Registration successful!");

        // ✅ Reset Form After Success
        setFormData({
          fullName: "",
          mobile: "",
          email: "",
          teamName: "",
          teamSize: "",
          college: "",
          branch: "",
          city: "",
          problemStatement: "",
          whyParticipate: "",
          acceptTerms: false,
        });
      } else {
        // ✅ Handle Error Response (from backend)
        console.log("response", response);
        toast.error(
          response.message || "Failed to register. Please 11 try again."
        );
      }
    } catch (error) {
      console.error("Registration error:", error);
      // console.log('response' , response);

      // toast.error("Failed to register. Please try again.");
      toast.error(error.message || "Failed to register. Please 11 try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen mt-[20vh]" >
      <div className="bg-[#1e293b] p-6 flex items-center justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 gap-10">
          <div className="bg-[#0f172a] rounded-lg shadow-xl p-8">
            <h1 className="text-3xl font-bold text-center text-[#25d8de] mb-8">
              Hackathon Registration
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`mt-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] px-4 py-3 ${errors.fullName ? "border-red-500" : ""
                    }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                )}
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-200">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] px-4 py-3 ${
                    errors.mobile ? "border-red-500" : ""
                  }`}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-400">{errors.mobile}</p>
                )}
              </div> */}

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={(e) => {
                    // Prevent user from typing more than 10 digits
                    const value = e.target.value.replace(/\D/g, ""); // Only allow numbers
                    if (value.length <= 10) {
                      setFormData((prev) => ({ ...prev, mobile: value }));
                      if (errors.mobile) {
                        setErrors((prev) => ({ ...prev, mobile: undefined }));
                      }
                    }
                  }}
                  className={`mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] px-4 py-3 ${errors.mobile ? "border-red-500" : ""
                    }`}
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-400">{errors.mobile}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Email ID *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] px-4 py-3 ${errors.email ? "border-red-500" : ""
                    }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Team Name */}
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Team Name *
                </label>
                <input
                  type="text"
                  name="teamName"
                  required
                  value={formData.teamName}
                  onChange={handleChange}
                  className={`mt-2 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] px-4 py-3 ${errors.teamName ? "border-red-500" : ""
                    }`}
                />
                {errors.teamName && (
                  <p className="mt-1 text-sm text-red-400">{errors.teamName}</p>
                )}
              </div>

              {/* Team Size */}
              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Team Size *
                </label>
                <select
                  name="teamSize"
                  required
                  value={formData.teamSize}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] px-4 py-3 ${errors.teamSize ? "border-red-500" : ""
                    }`}
                >
                  <option value="">Select Team Size</option>
                  <option value="1 Member">1 (Solo)</option>
                  <option value="2 Members">2 Members</option>
                  <option value="3 Members">3 Members</option>
                  <option value="4 Members">4 Members</option>
                </select>
                {errors.teamSize && (
                  <p className="mt-1 text-sm text-red-400">{errors.teamSize}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  College Name *
                </label>
                <input
                  type="text"
                  name="college"
                  required
                  value={formData.college}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] px-4 py-3 ${errors.college ? "border-red-500" : ""
                    }`}
                />
                {errors.college && (
                  <p className="mt-1 text-sm text-red-400">{errors.college}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Branch *
                </label>
                <input
                  type="text"
                  name="branch"
                  required
                  value={formData.branch}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] px-4 py-3 ${errors.branch ? "border-red-500" : ""
                    }`}
                />
                {errors.branch && (
                  <p className="mt-1 text-sm text-red-400">{errors.branch}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] px-4 py-3 ${errors.city ? "border-red-500" : ""
                    }`}
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-400">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Problem Statement *
                </label>
                <select
                  name="problemStatement"
                  required
                  value={formData.problemStatement}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] px-4 py-3 ${errors.problemStatement ? "border-red-500" : ""
                    }`}
                >

                  <option value="">Select a problem statement</option>
                  <option value="Smart waste bin level monitoring system">
                    Smart waste bin level monitoring system
                  </option>
                  <option value=" Automatic waste segregation with computer vision">
                    Automatic waste segregation with computer vision
                  </option>
                  <option value="Computer Vision for Industrial Wastewater Quality Monitoring">
                    Computer Vision for Industrial Wastewater Quality Monitoring
                  </option>
                  <option value="  AI-Powered Leak and Anomaly Detection in Urban Water Infrastructure">
                    AI-Powered Leak and Anomaly Detection in Urban Water Infrastructure
                  </option>
                  <option value=" Waste Collection Route Optimization">
                    Waste Collection Route Optimization
                  </option>
                  <option value="Hospital queue and bed management">
                    Hospital queue and bed management
                  </option>
                  <option value="Smart Public Toilet Monitoring & Maintenance System">
                    Smart Public Toilet Monitoring & Maintenance System
                  </option>
                  <option value=" Smart Urban Grievance & Service Response System">
                    Smart Urban Grievance & Service Response System
                  </option>
                  
                </select>
                {errors.problemStatement && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.problemStatement}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200">
                  Why do you want to participate? *
                </label>
                <textarea
                  name="whyParticipate"
                  required
                  value={formData.whyParticipate}
                  onChange={handleChange}
                  rows={4}
                  className={`mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-gray-200 shadow-sm focus:border-[#25d8de] focus:ring-[#25d8de] py-2 px-4 ${errors.whyParticipate ? "border-red-500" : ""
                    }`}
                  placeholder="Tell us about your motivation to join this hackathon..."
                />
                {errors.whyParticipate && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.whyParticipate}
                  </p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  required
                  checked={formData.acceptTerms}
                  onChange={handleCheckbox}
                  className="h-4 w-4 mt-1 text-[#25d8de] focus:ring-[#25d8de] border-gray-600 rounded bg-gray-700"
                />
                <div>
                  <label
                    htmlFor="acceptTerms"
                    className="text-gray-300 text-sm"
                  >
                    I accept the{" "}
                    <Link
                      to="/terms"
                      className="text-[#25d8de]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      terms and conditions
                    </Link>
                  </label>
                  {errors.acceptTerms && (
                    <p className="text-sm text-red-400">{errors.acceptTerms}</p>
                  )}
                </div>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#25d8de] text-white font-medium rounded-md hover:bg-[#20b8bd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25d8de] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Registration"}
                </button>

                {/* <Link to="/masterclass"><button
                  type="button"
                  className="px-6 py-3 bg-[#25d8de] text-white font-medium rounded-md hover:bg-[#20b8bd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25d8de] transition-colors"
                 
                >
                  Register for Master Class
                </button></Link> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <Guidelines />
    </div>
  );
};

export default Registration;
