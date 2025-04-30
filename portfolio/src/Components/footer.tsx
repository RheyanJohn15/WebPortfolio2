import React, { useState } from "react";
import { textVal } from "@/data/text";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function isValidEmail(email: string): boolean {
    // Regular expression for basic email validation.
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  const sendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Sending email...");

    if(!name || !email || !message){
      toast.update(toastId, {
        render: "Failed to send email. All fields are required",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    if(!isValidEmail(email)){
      toast.update(toastId, {
        render: "Failed to send email. The email address provided is invalid.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      console.log(data);

      toast.update(toastId, {
        render: "Email sent successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error: any) {
      toast.update(toastId, {
        render: "Failed to send email. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 3000,
      });
    }

    setLoading(false);
  };

  return (
    <footer
      id="footer"
      className="w-full bg-white text-gray-800 px-8 py-12 border-t border-gray-300"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Contact Me
          </h2>
          <p>
            <strong>Phone:</strong> {textVal.footer.number}
          </p>
          <p>
            <strong>Email:</strong> {textVal.footer.email}
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={textVal.footer.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {textVal.footer.linkedin}
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href={textVal.footer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {textVal.footer.github}
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">
            Send a Message
          </h2>
          <form className="flex flex-col gap-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your Email"
              className="p-3 rounded border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={4}
              className="p-3 rounded border border-gray-300 bg-white text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={sendEmail}
              type="submit"
              disabled={loading}
              className={`bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Rheyan John Blanco. All rights
        reserved.
      </div>
      <ToastContainer />
    </footer>
  );
}
