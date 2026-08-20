import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: "📘", label: "Facebook", url: "https://facebook.com" },
    { icon: "📷", label: "Instagram", url: "https://instagram.com" },
    { icon: "💬", label: "WhatsApp", url: "https://wa.me/919876543210" },
  ];

  const quickLinks = [
    { label: "Home", id: "hero" },
    { label: "Menu", id: "menu" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-b from-coffee-900 to-coffee-800 text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">☕</span>
              <div>
                <h3 className="font-serif text-2xl font-bold text-gold">
                  LUCKY
                </h3>
                <p className="text-xs font-bold text-cream">HIDEOUT</p>
              </div>
            </div>
            <p className="text-cream text-sm leading-relaxed">
              Your premium destination for exceptional coffee and delicious food
              in a cozy atmosphere.
            </p>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gold transition-colors duration-300 transform hover:scale-125"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-orange-500 mb-6 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-cream hover:text-gold transition-colors duration-300 font-semibold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-cream mb-6 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-cream text-sm">
              <li className="flex gap-2">
                <span>📞</span>
                <a
                  href="tel:+0011223344"
                  className="hover:text-gold transition-colors"
                >
                  +91 0011223344
                </a>
              </li>
              <li className="flex gap-2">
                <span>✉️</span>
                <a
                  href="mailto:yesh.thakur@luckyhideout.com"
                  className="hover:text-gold transition-colors break-all"
                >
                  yesh.thakur@luckyhideout.com
                </a>
              </li>
              <li className="flex gap-2">
                <span>📍</span>
                <span>123 Lucky Hideout, Godda Jharkhand</span>
              </li>
              <li className="flex gap-2">
                <span>🕐</span>
                <span>7 AM - 11 PM (Daily)</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Action */}
          <div>
            <h4 className="font-bold text-lg text-green-500 mb-6 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-cream text-sm mb-4">
              Follow us for special offers and new menu items!
            </p>
            <div className="space-y-3">
              <button
                onClick={() =>
                  window.open("https://wa.me/0011223344", "_blank")
                }
                className="w-full py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300"
              >
                💬 WhatsApp Updates
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("menu")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full py-2 bg-gold text-coffee-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300"
              >
                📋 View Menu
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-coffee-700"></div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream text-sm text-center sm:text-left">
            © {currentYear}{" "}
            <span className="font-bold text-gold">LUCKY HIDEOUT</span>. All
            rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <a
              href="#"
              className="text-orange-500 hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-orange-500">|</span>
            <a
              href="#"
              className="text-cream hover:text-gold transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-green-500">|</span>
            <a
              href="#"
              className="text-green-500 hover:text-gold transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>

        {/* Premium Footer Message */}
        <div className="py-4 text-center border-t border-coffee-700">
          <p className="text-gold italic text-sm font-semibold">
            ✨ Crafted with ❤️ for coffee lovers everywhere ✨
          </p>
        </div>
      </div>
    </footer>
  );
}
