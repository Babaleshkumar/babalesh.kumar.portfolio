import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub, FaCheckCircle } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const socialLinks = [
  { id: "linkedin", href: "https://www.linkedin.com/in/babalesh-kumar-369887225/", label: "LinkedIn", icon: <FaLinkedinIn /> },
  { id: "github", href: "https://github.com/Babaleshkumar", label: "GitHub", icon: <FaGithub /> }
];

const contactInfo = [
  {
    id: 1,
    icon: FaEnvelope,
    label: "Email",
    value: "babaleshkumar97iitg@gmail.com",
    href: "mailto:babaleshkumar97iitg@gmail.com",
    gradient: "from-red-500 to-pink-500"
  },
  {
    id: 2,
    icon: FaPhone,
    label: "Mobile",
    value: "+91 9457 754 711",
    href: "tel:+919457754711",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "babalesh-kumar-369887225",
    href: "https://www.linkedin.com/in/babalesh-kumar-369887225/",
    gradient: "from-blue-500 to-cyan-500"
  }
];

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const formContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const infoCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

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
    <motion.section
      id="contact"
      className="py-20 relative"
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-5xl font-bold inline-block relative mb-4">
          <span className="bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
            Contact Me
          </span>
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-400 via-red-400 to-orange-400"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </h2>
        <p className="text-gray-400 text-lg mt-4">Get in touch with me for collaborations or just a friendly hello</p>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        variants={formContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto mb-16"
      >
        <div className="relative group bg-gradient-to-br from-gray-950 to-gray-900 p-8 rounded-xl border border-gray-700 overflow-hidden group-hover:border-transparent transition-colors duration-300">
          {/* Gradient border on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Send Me a Message
            </h3>
            
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-900/30 border border-green-600 rounded-lg flex items-center gap-3"
              >
                <FaCheckCircle className="text-green-400 text-xl" />
                <p className="text-green-200">Message sent successfully! I'll get back to you soon.</p>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-900/30 border border-red-600 rounded-lg"
              >
                <p className="text-red-200">{error}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-gray-300 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 focus:shadow-lg focus:shadow-pink-400/30 transition duration-300"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <label className="block text-gray-300 font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 focus:shadow-lg focus:shadow-pink-400/30 transition duration-300"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-gray-300 font-medium mb-2">Comments / Questions</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50 focus:shadow-lg focus:shadow-pink-400/30 transition duration-300 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Contact Info Cards */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={info.id}
                href={info.href || "#"}
                custom={idx}
                variants={infoCardVariants}
                whileHover="hover"
                className="relative group"
              >
                <div className={`relative h-full bg-gradient-to-br from-gray-950 to-gray-900 px-6 py-6 rounded-xl border border-gray-700 flex items-center gap-4 overflow-hidden group-hover:border-transparent transition-all duration-300`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300 rounded-xl`} />
                  
                  <motion.div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={24} />
                  </motion.div>
                  
                  <div className="relative z-10 flex-1">
                    <div className="text-gray-400 group-hover:text-gray-300 text-sm transition-colors duration-300 font-medium">
                      {info.label}
                    </div>
                    <div className="text-gray-200 group-hover:text-white font-semibold transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        className="max-w-6xl mx-auto mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-100">Connect with me on</h3>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-gray-800 text-gray-300 hover:text-white border border-gray-700 hover:border-pink-500 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: idx * 0.05 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none opacity-0 lg:opacity-100" />
    </motion.section>
  );
}
