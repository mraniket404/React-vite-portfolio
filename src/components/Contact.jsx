import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 md:px-20 flex justify-center min-h-screen"
    >
      <div className="max-w-lg w-full">
        <form
          action="https://formspree.io/f/xgvnjqol"
          method="POST"
          encType="multipart/form-data"
          className="bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700 space-y-6"
        >
          <h2 className="text-4xl font-bold text-center mb-4">Contact Me</h2>

          <div>
            <label
              htmlFor="name"
              className="block text-sm mb-2 text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-2 text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm mb-2 text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              required
              rows="5"
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>
          </div>

          {/* File Input Section */}
          <div>
            <label
              htmlFor="attachment"
              className="block text-sm mb-2 text-gray-300"
            >
              Attachment (Optional)
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-green-500 file:text-white hover:file:bg-green-600 transition-all duration-300"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
            />
            <p className="text-xs text-gray-400 mt-2">
              Supported formats: PDF, DOC, DOCX, JPG, PNG, TXT (Max 10MB)
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded font-semibold text-lg bg-green-500 hover:bg-green-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;