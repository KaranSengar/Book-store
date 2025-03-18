import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">
        Have questions or need help? Feel free to reach out to us using the form below.
      </p>

      <form className="space-y-6 bg-gray-100 p-6 rounded-lg shadow-md">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message here..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
