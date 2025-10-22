import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 2000)
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
          <p className="mt-4 text-white/80">Send me a message or reach out on social.</p>
          <div className="mt-6 flex gap-3">
            <a 
              href="https://github.com/mraniket404"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/aniketgosavi404/"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="max-w-md w-full space-y-8">
          {/* Contact Form */}
          <form 
            onSubmit={handleSubmit}
            className="mt-8 bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 form-shadow border border-gray-700"
          >
            {/* Name Input */}
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-500"></i>
                </div>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="bg-gray-700/40 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="Your name"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-500"></i>
                </div>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="bg-gray-700/40 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="mb-5">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <i className="fas fa-comment text-gray-500"></i>
                </div>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="bg-gray-700/40 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                  placeholder="Your message here..."
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-bg text-white font-medium rounded-lg text-sm px-5 py-3.5 text-center hover:opacity-90 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-circle-notch fa-spin mr-2"></i>
                  Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane mr-2"></i>
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* Delivery Confirmation */}
          {isSubmitted && (
            <div className="mt-6 p-4 bg-green-900/20 rounded-lg border border-green-800/30">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-1">
                  <i className="fas fa-check-circle text-green-400"></i>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-200">Email Sent Successfully!</h3>
                  <p className="mt-1 text-sm text-green-300/80">Your message has been delivered to aniketgosavi471@gmail.com</p>
                  <p className="mt-2 text-xs text-green-400/60">
                    Delivered at {new Date().toLocaleTimeString()} on {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Alternative Options */}
          <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-sm font-medium text-gray-200 mb-2">Alternative ways to contact:</h3>
            <div className="flex flex-col space-y-2">
              <a 
                href="mailto:aniketgosavi471@gmail.com" 
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <i className="fas fa-envelope-open-text mr-2"></i>
                <span>Open in your email client</span>
              </a>
              <div className="flex items-center text-gray-400">
                <i className="fas fa-phone mr-2"></i>
                <span>Request phone number</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact