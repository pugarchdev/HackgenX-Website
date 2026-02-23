import axios from "axios";
const API_BASE_URL = "https://hack-gen-x-backend.vercel.app/api";

export const registerUser = async (formData) => {
  try {
    console.log("in try bolcl");
    const mappedData = {
      fullName: formData.fullName,
      mobileNumber: formData.mobile,
      email: formData.email,
      teamName: formData.teamName,
      teamSize: formData.teamSize,
      collegeName: formData.college,
      branch: formData.branch,
      city: formData.city,
      problemStatement: formData.problemStatement,
      reasonForParticipation: formData.whyParticipate,
    };

    console.log("Sending data to backend:", mappedData);
    const response = await axios.post(`${API_BASE_URL}/register`, mappedData);
    console.log("Response from backend:", response.data);
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    throw error.response?.data || { error: "Something went wrong" };
  }
};

export const handleMasterClassRegistration = async (formData) => {
  try {
    console.log("Submitting form:", formData);

    let selectedClasses = [...formData.classes];

    if (selectedClasses.includes("other") && formData.otherClass.trim()) {
      selectedClasses = selectedClasses.map((cls) =>
        cls === "other" ? formData.otherClass.trim() : cls
      );
    }

    const mappedData = {
      fullName: formData.fullName,
      email: formData.email,
      mobileNumber: formData.mobileNumber,
      age: formData.age,
      classes: formData.classes,
      exp: formData.exp,
    };

    console.log("Sending data to backend:", mappedData);
    const response = await axios.post(
      `${API_BASE_URL}/register-masterclass
`,
      mappedData
    );
    console.log("Response from backend:", response.data);
    alert("Registration Successful!");
  } catch (error) {
    console.error("API error:", error);
    alert(error.response?.data?.error || "Something went wrong.");
  }
};
