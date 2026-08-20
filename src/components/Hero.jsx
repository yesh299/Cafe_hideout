import React from "react";

export default function Hero() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20view%20your%20menu!",
      "_blank",
    );
  };

  const features = [
    { icon: "☕", label: "Premium Coffee", desc: "Ethically sourced beans" },
    { icon: "👨‍🍳", label: "Expert Chefs", desc: "Culinary excellence" },
    { icon: "🏡", label: "Cozy Ambiance", desc: "Perfect hideaway" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-950 flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Premium Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-coffee-700 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-coffee-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-coffee-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

      {/* Decorative Premium Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/30 "></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-coffee-900 "></div>

      <div className="relative z-10 w-full">
        {/* Premium Badge */}
        <div className="text-center mb-8 animate-fadeIn">
          <span className="inline-block px-6 py-2 bg-black border border-orange-500 border border-white-500 rounded-full text-orange-500 font-semibold text-sm uppercase tracking-widest">
            ✨ Premium
            <span className="text-emerald-50"> Cafe</span>
            <span className="text-green-500"> Experience ✨</span>
          </span>
        </div>

        {/* Main Content Container */}
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-8 animate-fadeIn flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-beige rounded-full blur-2xl opacity-30"></div>
              <span className="relative text-7xl sm:text-9xl inline-block drop-shadow-2xl"></span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-6 animate-slideUp">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cream via-gold to-beige mb-4 leading-tight">
              Welcome
              <span className="text-orange-600  hover:text-green-500">
                {" "}
                to
              </span>{" "}
              <br />
              <span className="text-green-600  hover:text-orange-500">
                Lucky
              </span>
              <span className="text-gold"> Hideout</span>
            </h1>
          </div>

          {/* Premium Divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-1 w-12 bg-gradient-to-r from-gold to-transparent"></div>
            <span className="text-2xl text-gold">✦</span>
            <div className="h-1 w-12 bg-gradient-to-l from-gold to-transparent"></div>
          </div>

          {/* Tagline */}
          <p className="font-serif text-2xl sm:text-3xl text-beige mb-4 leading-relaxed animate-slideUp font-semibold">
            <span className="text-orange-500">Fresh Coffee </span>
            <span className="text-white">. Delicious Food </span>
            <span className="text-green-500">. Cozy Atmosphere</span>
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-cream/90 mb-6 max-w-3xl mx-auto leading-relaxed animate-slideUp">
            Discover your perfect escape where premium quality meets exceptional
            hospitality. Enjoy handcrafted coffee, mouth-watering cuisine, and
            an ambiance that feels like home.
          </p>

          {/* Trust Indicators */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12 animate-slideUp">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-coffee-800/50 backdrop-blur-sm border border-gold/30 rounded-lg p-4 hover:border-gold/60 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-3xl mb-2 block">{feature.icon}</span>
                <p className="text-gold font-bold mb-1">{feature.label}</p>
                <p className="text-cream/70 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 animate-slideUp">
            <button
              onClick={() =>
                document
                  .getElementById("menu")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-10 py-4 bg-gradient-to-r from-gold to-yellow-300 text-coffee-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 text-lg overflow-hidden"
            >
              <span className="relative flex items-center justify-center gap-3">
                <span className="text-2xl">📋</span>
                <span>View Our Menu</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </button>
            <button
              onClick={handleWhatsApp}
              className="group relative px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 text-lg overflow-hidden"
            >
              <span className="relative flex items-center justify-center gap-3">
                <span className="text-2xl">💬</span>
                <span>Order on WhatsApp</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16 animate-slideUp">
            {[
              { number: "5K+", span: "Happy Customers" },
              { number: "12+", span: "Years Experience" },
              { number: "16+", span: "Menu Items" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl sm:text-5xl font-black text-gold mb-2">
                  {stat.number}
                </p>
                <p className="text-orange-500 font-semibold">{stat.span}</p>
              </div>
            ))}
          </div>

          {/* CTA Text */}
          <p className="text-cream/70 italic mb-8 text-lg animate-slideUp">
            <span className="text-orange-400">"Your perfect </span>
            <span className="text-white">coffee </span>
            <span className="text-green-400">companion awaits"</span>
          </p>

          {/* Scroll Indicator */}
          <div className="mt-12 animate-bounce flex flex-col items-center">
            <p className="text-orange-500 text-sm mb-3 uppercase tracking-widest font-semibold">
              Scroll
              <span className="text-white"> to </span>
              <span className="text-green-500"> Explore </span>
            </p>
            <div className="flex gap-2">
              <span className="text-3xl text-gold animate-bounce">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
