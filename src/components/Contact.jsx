import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const socialLinks = [
  { id: "facebook", href: "https://www.facebook.com/babalesh.kumar.iitg/", label: "Facebook", icon: <FaFacebookF /> },
  { id: "twitter", href: "https://x.com/BABALESH1", label: "Twitter", icon: <FaTwitter /> },
  { id: "linkedin", href: "https://www.linkedin.com/in/babalesh-kumar-369887225/", label: "LinkedIn", icon: <FaLinkedinIn /> },
  { id: "whatsapp", href: "https://wa.me/9457754711", label: "WhatsApp", icon: <SiWhatsapp /> }
];

export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>

      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-center">
        <div className="flex-1 bg-gray-800 px-6 py-4 rounded-md flex items-center gap-4">
          <FaEnvelope className="text-yellow-400" />
          <div>
            <div className="text-gray-200 font-medium">babaleshkumar97iitg@gmail.com</div>
          </div>
        </div>

        <div className="flex-1 bg-gray-800 px-6 py-4 rounded-md flex items-center gap-4">
          <FaPhone className="text-yellow-400" />
          <div>
            <div className="text-gray-200 font-medium">+91-9457754711</div>
          </div>
        </div>

        <div className="flex-1 bg-gray-800 px-6 py-4 rounded-md flex items-center gap-4">
          <FaMapMarkerAlt className="text-yellow-400" />
          <div>
            <div className="text-gray-200 font-medium">Uttar Pradesh, India</div>
          </div>
        </div>
      </div>

      {/* footer small social icons and horizontal gold rules */}
      <div className="max-w-4xl mx-auto mt-10 text-center">
        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center gap-4">
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

        <div className="mt-6 text-sm text-gray-500">"Thanks for Visiting"</div>
      </div>
    </section>
  );
}
