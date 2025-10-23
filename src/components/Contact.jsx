import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xgvnjqol", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-900 text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 mb-10">
          Feel free to reach out! I'll respond as soon as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-gray-700 space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-green-500 outline-none"
          ></textarea>

          <button
            type="submit"
            className={`${
              status === "sending" ? "bg-gray-500" : "bg-green-500 hover:bg-green-600"
            } py-3 w-full rounded font-semibold transition-all duration-300`}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 mt-4 animate-pulse">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 mt-4">
              ❌ Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
