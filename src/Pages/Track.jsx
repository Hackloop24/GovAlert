import React from 'react';

const Track= () => {
  return (
    <>
      {/* Top Navigation Bar - Full Width */}
      <nav className="w-screen bg-gray-800 px-6 py-4 shadow-lg sticky top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex space-x-8">
            <a href="index.html" className="text-gray-300 hover:text-blue-400">Home</a>
            <a href="report.html" className="text-gray-300 hover:text-blue-400">Report</a>
            <a href="#help" className="text-gray-300 hover:text-blue-400">Help</a>
          </div>
          <div className="flex space-x-4">
            <a href="signin.html" className="text-blue-400 hover:text-blue-500">Sign In</a>
            <a href="signup.html" className="text-blue-400 hover:text-blue-500">Sign Up</a>
          </div>
        </div>
      </nav>

      <div className="min-h-screen bg-gray-900 text-gray-200">
        {/* Track Progress Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Track Your Report Progress</h2>
          <p className="text-gray-400 mb-12">
            Easily track the status and progress of your submitted reports.
          </p>

          {/* Report Progress Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Report #1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <h4 className="text-xl font-semibold text-blue-300 mb-2">Report #12345</h4>
              <p className="text-gray-400 mb-2">Submitted: 2024-11-01</p>
              <p className="text-gray-400 mb-4">Last Updated: 2024-11-05</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Progress:</label>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                      60%
                    </span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                      Pending
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-full bg-gray-300 rounded-full">
                      <div 
                        className="bg-teal-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" 
                        style={{width: '60%'}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Updates */}
              <h5 className="text-lg font-semibold text-blue-300 mb-2">Status Updates:</h5>
              <ul className="text-gray-400 list-inside list-decimal">
                <li>2024-11-01: Report Submitted</li>
                <li>2024-11-03: Issue Under Review</li>
                <li>2024-11-05: Awaiting Approval</li>
              </ul>

              <p className="text-gray-400 mt-4">
                Next step: <span className="text-teal-400 font-semibold">Government Review</span>
              </p>
            </div>

            {/* Report #2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <h4 className="text-xl font-semibold text-blue-300 mb-2">Report #67890</h4>
              <p className="text-gray-400 mb-2">Submitted: 2024-10-28</p>
              <p className="text-gray-400 mb-4">Last Updated: 2024-11-02</p>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Progress:</label>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                      20%
                    </span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                      Pending
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-full bg-gray-300 rounded-full">
                      <div 
                        className="bg-orange-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" 
                        style={{width: '20%'}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="text-lg font-semibold text-blue-300 mb-2">Status Updates:</h5>
              <ul className="text-gray-400 list-inside list-decimal">
                <li>2024-10-28: Report Submitted</li>
                <li>2024-10-30: Issue Acknowledged</li>
              </ul>

              <p className="text-gray-400 mt-4">
                Next step: <span className="text-teal-400 font-semibold">Investigation</span>
              </p>
            </div>

            {/* Report #3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
              <h4 className="text-xl font-semibold text-blue-300 mb-2">Report #24680</h4>
              <p className="text-gray-400 mb-2">Submitted: 2024-11-05</p>
              <p className="text-gray-400 mb-4">Last Updated: 2024-11-06</p>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2">Progress:</label>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                      30%
                    </span>
                  </div>
                  <div className="flex mb-2 items-center justify-between">
                    <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-orange-600 bg-orange-200">
                      Pending
                    </span>
                  </div>
                  <div className="flex mb-2">
                    <div className="w-full bg-gray-300 rounded-full">
                      <div 
                        className="bg-orange-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" 
                        style={{width: '30%'}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="text-lg font-semibold text-blue-300 mb-2">Status Updates:</h5>
              <ul className="text-gray-400 list-inside list-decimal">
                <li>2024-11-05: Report Submitted</li>
                <li>2024-11-06: Acknowledged by Local Authority</li>
              </ul>

              <p className="text-gray-400 mt-4">
                Next step: <span className="text-teal-400 font-semibold">Action Required</span>
              </p>
            </div>
          </div>
        </section>

        {/* Footer - Full Width */}
        <footer className="w-screen bg-gray-800 py-4 text-gray-400 text-center">
          <p>&copy; 2024 Grievance Platform. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Track;