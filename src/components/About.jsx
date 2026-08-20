import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-cream to-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Visual */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-beige rounded-3xl transform -rotate-3 opacity-30"></div>
              <div className="relative bg-gradient-to-br from-coffee-800 to-coffee-900 rounded-3xl p-8 shadow-2xl flex items-center justify-center h-80">
                <div className="text-center">
                  <span className="text-7xl block mb-4">☕🏠</span>
                  <p className="text-gold font-bold text-xl">
                    Your Second Home
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-coffee-900 mb-6">
              <span className="text-orange-500">About </span>
              <span className="text-green-500">Lucky </span>
              <span className="text-blue-500">Hideout</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-gold to-beige mb-8"></div>

            <div className="space-y-6 text-coffee-700 leading-relaxed">
              <p className="text-lg">
                Welcome to{" "}
                <span className="font-bold text-coffee-900">Lucky Hideout</span>
                , where tradition meets innovation. Since our opening, we've
                been dedicated to crafting the perfect cup of coffee and serving
                delicious food in an inviting atmosphere.
              </p>

              <p className="text-lg">
                Our philosophy is simple: use the finest quality beans, maintain
                exceptional service standards, and create a space where everyone
                feels at home. Every coffee is handcrafted with precision, and
                every pastry is baked fresh daily.
              </p>

              <div className="bg-white rounded-lg p-6 border-l-4 border-gold">
                <h3 className="font-bold text-coffee-900 text-lg mb-3">
                  What Makes Us Special
                </h3>
                <ul className="space-y-2 text-coffee-700">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span>
                      Premium, ethically-sourced coffee beans from around the
                      world
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span>Expert baristas trained to perfection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span>Fresh, homemade pastries and food items daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span>
                      Cozy, welcoming ambiance perfect for work or relaxation
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span>
                      Free WiFi and comfortable seating for extended stays
                    </span>
                  </li>
                </ul>
              </div>

              <p className="text-lg italic text-gold font-semibold">
                "A cup of coffee is a moment of connection - let us be your
                hideout."
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "5K+", label: "Happy Customers" },
            { number: "100%", label: "Premium Quality" },
            { number: "12+", label: "Years Experience" },
            { number: "7/7", label: "Days Open" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform hover:scale-105 transition-transform"
            >
              <p className="text-4xl font-bold text-gold mb-2">{stat.number}</p>
              <p className="font-semibold text-coffee-900">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
