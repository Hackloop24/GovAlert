import React from 'react';

const Signup = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    setTimeout(() => {
      alert("Sign-up successful!");
      window.location.href = "index.html";
    }, 1000);
  };

  return (
    <>
      {/* Top Navigation Bar - Full Width */}
      <nav className="w-screen bg-gray-800 px-6 py-4 shadow-lg">
        <div className="flex justify-start">
          <a href="index.html" className="text-gray-300 hover:text-blue-400 mr-8">Home</a>
          <a href="report.html" className="text-gray-300 hover:text-blue-400 mr-8">Report</a>
          <a href="#phone" className="text-gray-300 hover:text-blue-400 mr-8">Contact</a>
          <a href="#help" className="text-gray-300 hover:text-blue-400 mr-8">Help</a>
          <a href="#about" className="text-gray-300 hover:text-blue-400">About Us</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <main className="flex-grow flex items-center justify-center p-4">
          <div className="bg-gray-800 p-4 shadow-lg rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-200">Create an Account</h2>
            <form onSubmit={handleSignUp}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-300">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-300">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center text-gray-400">
              Already have an account?
              <a href="signin.html" className="text-blue-600 hover:underline ml-1">Sign In</a>
            </p>
          </div>
        </main>

        {/* Footer - Full Width */}
        <footer className="w-screen bg-gray-800 py-4 text-gray-400 text-center">
          &copy; 2024 Grievance Redressal Platform. All Rights Reserved.
        </footer>
      </div>
    </>
  );
};

export default Signup;