import React from "react";

export default function Contact() {
  const contactInfo = {
    ownerName: "Yesh Thakur",
    phone: "+91 0011223344",
    whatsapp: "+91 0011223344",
    email: "yesh.thakur@luckyhideout.com",
    address: "123 Lucky Hideout, Godda Jharkhand",
    openingHours: [
      { day: "Monday - Friday", hours: "7:00 AM - 10:00 PM" },
      { day: "Saturday", hours: "8:00 AM - 11:00 PM" },
      { day: "Sunday", hours: "8:00 AM - 10:00 PM" },
      { day: "Holidays", hours: "9:00 AM - 9:00 PM" },
    ],
  };

  const handleCall = () => {
    window.location.href = `tel:+919876543210`;
  };

  const handleEmail = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20Lucky%20Hideout`,
      "_blank",
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-beige to-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-orange-500">Get </span>
            <span className="text-coffee-500">in </span>
            <span className="text-green-500"> Touch</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gold to-beige mx-auto"></div>
          <p className="text-coffee-700 mt-4 text-lg">
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Owner Info */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-gold transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-coffee-900 mb-2">
                👤 Owner
              </h3>
              <p className="text-xl text-coffee-700 font-semibold">
                {contactInfo.ownerName}
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-gold transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-coffee-900 mb-4">
                📞 Phone Number
              </h3>
              <p className="text-xl font-mono text-coffee-700 mb-4">
                {contactInfo.phone}
              </p>
              <button
                onClick={handleCall}
                className="w-full py-3 bg-gold text-coffee-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Call Now
              </button>
            </div>

            {/* WhatsApp */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-coffee-900 mb-4">
                💬 WhatsApp
              </h3>
              <p className="text-xl font-mono text-coffee-700 mb-4">
                {contactInfo.whatsapp}
              </p>
              <button
                onClick={handleWhatsApp}
                className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Message on WhatsApp
              </button>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-500 transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-coffee-900 mb-4">
                ✉️ Email
              </h3>
              <p className="text-lg text-coffee-700 mb-4 break-all">
                {contactInfo.email}
              </p>
              <button
                onClick={handleEmail}
                className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Email
              </button>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-gold transform hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-coffee-900 mb-4">
                📍 Location
              </h3>
              <p className="text-lg text-coffee-700 leading-relaxed mb-6">
                {contactInfo.address}
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://maps.google.com/maps/search/123+Coffee+Lane",
                    "_blank",
                  )
                }
                className="w-full py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
              >
                📍 Get Directions
              </button>
            </div>

            {/* Opening Hours */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-gold">
              <h3 className="text-2xl font-bold text-coffee-900 mb-6">
                🕐 Opening Hours
              </h3>
              <div className="space-y-3">
                {contactInfo.openingHours.map((schedule, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b border-coffee-200 pb-3 last:border-b-0"
                  >
                    <span className="font-semibold text-coffee-900">
                      {schedule.day}
                    </span>
                    <span className="text-coffee-700 font-mono text-sm">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-green-600 mt-4 font-semibold">
                ✓ Open Today
              </p>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="bg-gradient-to-r from-coffee-900 to-coffee-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">
            <span className="text-orange-400">Ready </span>
            <span className="text-white">to </span>
            <span className="text-green-400">Visit?</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCall}
              className="px-8 py-4 bg-gold text-coffee-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
            >
              📞 Call Us
            </button>
            <button
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
            >
              💬 Message Us
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-cream text-coffee-900 font-bold rounded-lg hover:bg-yellow-100 transition-all duration-300 transform hover:scale-105"
            >
              📋 View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
