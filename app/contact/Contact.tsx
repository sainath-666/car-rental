import React from "react";

function Contact() {
  return (
    <div className="min-h-screen p-6 ">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Contact Us
        </h1>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium  mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-600 border border-gray-600  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium  mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-600 border border-gray-600  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-600 border border-gray-600  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter subject"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium  mb-2">
              Message
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-2 bg-gray-600 border border-gray-600  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              placeholder="Enter your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600  px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
            >
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-600 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="font-medium ">Phone</h3>
            <p className="text-gray-400 mt-2">+1 234 567 890</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-600 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="font-medium ">Email</h3>
            <p className="text-gray-400 mt-2">info@wheelzy.com</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-gray-600 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="font-medium ">Location</h3>
            <p className="text-gray-400 mt-2">123 Car Street, Auto City</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
