import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-white text-gray-800 px-8 py-12 border-t border-gray-300">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Contact Me</h2>
          <p><strong>Phone:</strong> 09275333250</p>
          <p><strong>Email:</strong> rheyanjohnblancogwapo@gmail.com</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/rheyan-john-blanco-256090287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              https://www.linkedin.com/in/rheyan-john-blanco-256090287/
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/RheyanJohn15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
                https://github.com/RheyanJohn15
            </a>
          </p>
          <a
            href="/ResumeRheyanJohnBlanco.pdf"
            download
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Hire Me (Download CV)
          </a>
        </div>

        {/* Message Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Send a Message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded border border-gray-300 bg-white text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Rheyan John Blanco. All rights reserved.
      </div>
    </footer>
  );
}
