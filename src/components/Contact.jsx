import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-10">
          Have a question or want to collaborate? Fill out the form below and I'll get back to you soon.
        </p>

        {/* Netlify Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="bg-gray-800 p-8 rounded-2xl shadow-lg"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="mb-6">
            <label htmlFor="name" className="block text-left text-gray-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-left text-gray-300 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-left text-gray-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition duration-200 w-full py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
