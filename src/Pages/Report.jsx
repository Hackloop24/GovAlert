import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();
  
  const goToHome = (event) => {
    event.preventDefault();
    alert("You are now going to the home page");
    navigate("/"); // Adjust this route to point to the home page
  };

  return (
    <div className="bg-gray-900 text-gray-200 flex flex-col min-h-screen w-screen overflow-hidden">
      {/* Top Navigation Bar */}
      <nav className="bg-gray-800 p-4 shadow-lg flex justify-between items-center sticky top-0 z-50 w-full">
        {/* Navigation Links on the Left Side */}
        <div className="flex items-center space-x-8">
          <a href="/" onClick={goToHome} className="flex items-center space-x-1 text-gray-300 hover:text-blue-400">
            <i className="fa fa-home"></i><span>Home</span>
          </a>
          <a href="/report" className="flex items-center space-x-1 text-gray-300 hover:text-blue-400">
            <i className="fa fa-flag"></i><span>Report</span>
          </a>
          <a href="#phone" className="flex items-center space-x-1 text-gray-300 hover:text-blue-400">
            <i className="fa fa-phone"></i><span>Contact</span>
          </a>
          <a href="#help" className="flex items-center space-x-1 text-gray-300 hover:text-blue-400">
            <i className="fa fa-question-circle"></i><span>Help</span>
          </a>
          <a href="#about" className="flex items-center space-x-1 text-gray-300 hover:text-blue-400">
            <i className="fa fa-info-circle"></i><span>About Us</span>
          </a>
        </div>

        {/* Sign In/Sign Up Links on the Right Side */}
        <div className="flex items-center space-x-4">
          <a href="/signin" className="text-blue-400 hover:text-blue-500">Sign In</a>
          <a href="/signup" className="text-blue-400 hover:text-blue-500">Sign Up</a>
        </div>
      </nav>

      {/* Website Header */}
      <header className="text-center py-8 bg-gray-900 w-full">
        <h1 className="text-4xl font-bold text-blue-400">Grievance Redressal Platform</h1>
        <p className="text-gray-400 mt-2">
          A transparent platform for residents to report issues and monitor their resolution.
        </p>
      </header>

      {/* Grievance Submission Form */}
      <section className="flex-grow container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-8">Submit Your Grievance</h2>
        <form className="space-y-4 max-w-2xl mx-auto">
          <div>
            <label htmlFor="description" className="block text-left text-gray-200">Problem Description:</label>
            <textarea
              id="description"
              rows="4"
              className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
              placeholder="Describe the issue..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="proof" className="block text-left text-gray-200">Upload Proof:</label>
            <input
              type="file"
              id="proof"
              multiple
              className="block w-full text-gray-200"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-blue-300">Location Details</h3>

            <label htmlFor="state" className="block text-left text-gray-200">State:</label>
            <input
              type="text"
              id="state"
              placeholder="Enter State"
              className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
            />

            <label htmlFor="district" className="block text-left text-gray-200">District:</label>
            <input
              type="text"
              id="district"
              placeholder="Enter District"
              className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
            />

            <label htmlFor="taluk" className="block text-left text-gray-200">Taluk:</label>
            <input
              type="text"
              id="taluk"
              placeholder="Enter Taluk"
              className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
            />

            <label htmlFor="municipal" className="block text-left text-gray-200">Panchayat/Municipal Corporation:</label>
            <input
              type="text"
              id="municipal"
              placeholder="Enter Panchayat or Municipal Corporation"
              className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
            />

            <label htmlFor="pincode" className="block text-left text-gray-200">Pin Code:</label>
            <input
              type="text"
              id="pincode"
              placeholder="Enter Pin Code"
              className="w-full p-2 rounded-md bg-gray-800 text-gray-200"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-gray-900 font-semibold py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit Grievance
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-800 text-gray-400 w-full">
        &copy; 2024 Grievance Redressal Platform. All Rights Reserved.
      </footer>
    </div>
  );
}

export default Report;
