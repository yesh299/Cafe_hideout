import React, { useState, useEffect } from "react";
import AdminButton from "./AdminButton";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Owner", id: "owner" },
    { label: "Menu", id: "menu" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-coffee-900 shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer flex items-center gap-2 group"
        >
          <span className="text-2xl sm:text-3xl font-bold text-gold group-hover:text-yellow-300 transition-colors">
            ☕
          </span>
          <div>
            <h1
              className={`font-serif font-bold transition-colors ${
                isScrolled ? "text-gold" : "text-gold"
              }`}
            >
              <span className="text-lg sm:text-2xl">LUCKY</span>
            </h1>
            <p
              className={`text-xs sm:text-sm font-semibold -mt-1 transition-colors ${
                isScrolled ? "text-cream" : "text-coffee-700"
              }`}
            >
              HIDEOUT
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`px-4 py-2 font-semibold rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "text-cream hover:bg-gold hover:text-coffee-900"
                  : "text-coffee-900 hover:bg-gold hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          {/* Divider */}
          <div
            className={`h-6 w-px mx-2 ${isScrolled ? "bg-cream/30" : "bg-coffee-900/30"}`}
          ></div>
          {/* Admin Button */}
          <AdminButton />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-coffee-900 border-t-2 border-gold">
          <nav className="flex flex-col gap-0 max-w-7xl mx-auto px-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-cream px-4 py-3 font-semibold hover:bg-gold hover:text-coffee-900 transition-all border-b border-coffee-800 last:border-b-0"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
