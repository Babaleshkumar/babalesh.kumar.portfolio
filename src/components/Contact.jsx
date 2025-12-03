import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaCheckCircle } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const socialLinks = [
  { id: "facebook", href: "https://www.facebook.com/babalesh.kumar.iitg/", label: "Facebook", icon: <FaFacebookF /> },
  { id: "twitter", href: "https://x.com/BABALESH1", label: "Twitter", icon: <FaTwitter /> },
  { id: "linkedin", href: "https://www.linkedin.com/in/babalesh-kumar-369887225/", label: "LinkedIn", icon: <FaLinkedinIn /> },
  { id: "whatsapp", href: "https://wa.me/9457754711", label: "WhatsApp", icon: <SiWhatsapp /> }
];

export default function Contact() {
  const ref = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('bJUw7jzHx9mFqgeLp');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await emailjs.send('service_sl11uun', 'template_ezgkd49', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (response.status === 200) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Error sending message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12" ref={ref} style={{ opacity: 0 }}>
      <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in-up" style={{ animation: "fadeInUp 0.6s ease-out forwards", opacity: 0 }}>Contact Me</h2>

      {/* Contact Form */}
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-lg p-8 shadow-lg mb-12" style={{ animation: "fadeInUp 0.6s ease-out 0.1s forwards", opacity: 0 }}>
        <h3 className="text-2xl font-bold mb-6 text-gray-100">Send Me a Message</h3>
        
        {success && (
          <div className="mb-6 p-4 bg-green-900 border border-green-600 rounded-lg flex items-center gap-3">
            <FaCheckCircle className="text-green-400 text-xl" />
            <p className="text-green-200">Message sent successfully! I'll get back to you soon.</p>
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-900 border border-red-600 rounded-lg">
            <p className="text-red-200">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 focus:shadow-lg focus:shadow-yellow-400/30 transition duration-300"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 focus:shadow-lg focus:shadow-yellow-400/30 transition duration-300"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-300 font-medium mb-2">Comments / Questions</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              rows="5"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 focus:shadow-lg focus:shadow-yellow-400/30 transition duration-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-gray-800 px-6 py-4 rounded-md flex items-center gap-4 hover:bg-gray-700 transition-colors" style={{ animation: "fadeInUp 0.6s ease-out 0.2s forwards", opacity: 0 }}>
            <FaEnvelope className="text-yellow-400 text-xl" />
            <div>
              <div className="text-gray-400 text-sm">Email</div>
              <div className="text-gray-200 font-medium">babaleshkumar97iitg@gmail.com</div>
            </div>
          </div>

          <div className="bg-gray-800 px-6 py-4 rounded-md flex items-center gap-4 hover:bg-gray-700 transition-colors" style={{ animation: "fadeInUp 0.6s ease-out 0.3s forwards", opacity: 0 }}>
            <FaPhone className="text-yellow-400 text-xl" />
            <div>
              <div className="text-gray-400 text-sm">Phone</div>
              <div className="text-gray-200 font-medium">+91-9457754711</div>
            </div>
          </div>

          <div className="bg-gray-800 px-6 py-4 rounded-md flex items-center gap-4 hover:bg-gray-700 transition-colors" style={{ animation: "fadeInUp 0.6s ease-out 0.4s forwards", opacity: 0 }}>
            <FaMapMarkerAlt className="text-yellow-400 text-xl" />
            <div>
              <div className="text-gray-400 text-sm">Location</div>
              <div className="text-gray-200 font-medium">Uttar Pradesh, India</div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-gray-400 mb-4">Connect with me on social media</p>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <div key={link.id} className="relative group">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-200 text-white shadow"
              >
                <span className="text-lg">{link.icon}</span>
              </a>
              {/* Tooltip on hover */}
              <div className="absolute bottom-full mb-2 px-3 py-1 bg-yellow-400 text-gray-900 text-sm font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex items-center gap-2">
                {link.icon}
                <span>{link.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm text-gray-500">"Thanks for Visiting"</div>
      </div>
    </section>
  );
}