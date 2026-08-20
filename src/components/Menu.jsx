import React, { useState } from "react";
import { menuData } from "../data/menuData";
import { useAdmin } from "../context/AdminContext";

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [previewItem, setPreviewItem] = useState(null);
  const { adminProducts } = useAdmin();

  // Combine default menu items with admin products
  const allMenuItems = [...menuData, ...adminProducts];

  // Get all unique categories
  const categorySet = new Set();
  categorySet.add("All");
  allMenuItems.forEach((item) => categorySet.add(item.category));
  const categories = Array.from(categorySet);

  const filteredMenu =
    selectedCategory === "All"
      ? allMenuItems
      : allMenuItems.filter((item) => item.category === selectedCategory);

  const handleWhatsAppOrder = (item) => {
    const message = `Hello, I would like to order:\n\nItem Name: ${item.name}\nPrice: ₹${item.price}\n\nPlease confirm availability and delivery time.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919876543210?text=${encodedMessage}`, "_blank");
  };

  const openPreview = (item) => {
    if (item.image) {
      setPreviewItem(item);
    }
  };

  const closePreview = () => {
    setPreviewItem(null);
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-beige to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Products Alert */}
        {adminProducts.length > 0 && (
          <div className="mb-8 p-4 bg-purple-50 border-2 border-purple-300 rounded-lg text-center">
            <p className="text-purple-900 font-semibold">
              ✨{" "}
              <span className="font-bold text-lg">{adminProducts.length}</span>{" "}
              new item(s) just added to our menu!
            </p>
          </div>
        )}

        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-coffee-900 mb-4">
            <span className="text-orange-500">☕ Our </span>
            <span className="text-white">Delicious </span>
            <span className="text-green-500">Menu</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gold to-beige mx-auto"></div>
          <p className="text-coffee-700 mt-4 text-lg">
            <span className="text-orange-500"> Discover our handcrafted </span>
            <span className="text-white">selection of premium </span>
            <span className="text-green-500">coffee and delicious food</span>
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === cat
                  ? "bg-gold text-coffee-900 shadow-lg"
                  : "bg-white text-coffee-700 border-2 border-gold hover:bg-gold hover:text-coffee-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMenu.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${item.isCustom ? "border-2 border-purple-300" : ""}`}
            >
              {/* Item Image/Icon */}
              <button
                type="button"
                onClick={() => openPreview(item)}
                className="relative h-40 w-full bg-gradient-to-br from-coffee-800 to-coffee-900 flex items-center justify-center overflow-hidden cursor-zoom-in focus:outline-none focus:ring-4 focus:ring-gold/40"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <span className="text-6xl group-hover:scale-125 transition-transform duration-300">
                    {item.emoji}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/35 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gold opacity-0 group-hover:opacity-10 transition-opacity"></div>
                {item.isCustom && (
                  <div className="absolute top-2 right-2 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    ✨ New
                  </div>
                )}
              </button>

              {/* Item Details */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-coffee-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-coffee-700 text-sm leading-relaxed mb-3 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mb-4 border-t border-coffee-200 pt-3">
                  <span className="text-gold font-bold text-lg">
                    ₹{item.price}
                  </span>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      item.isCustom
                        ? "bg-purple-100 text-purple-700"
                        : "bg-cream text-coffee-600"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Order Button */}
                <button
                  onClick={() => handleWhatsAppOrder(item)}
                  className="w-full py-2 bg-gradient-to-r from-gold to-yellow-300 text-coffee-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm"
                >
                  💬 Order on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMenu.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-coffee-700 font-semibold">
              No items found in this category
            </p>
          </div>
        )}

        {/* Image Preview Modal */}
        {previewItem && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closePreview}
          >
            <div
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={closePreview}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/60 text-white text-xl font-bold hover:bg-black transition-colors"
                aria-label="Close image preview"
              >
                ×
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="bg-coffee-950 flex items-center justify-center p-6 min-h-[18rem] lg:min-h-[32rem]">
                  {previewItem.image ? (
                    <img
                      src={previewItem.image}
                      alt={previewItem.name}
                      className="max-h-[75vh] w-full object-contain"
                    />
                  ) : (
                    <span className="text-8xl">{previewItem.emoji}</span>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <span className="inline-flex w-fit text-xs font-semibold px-3 py-1 rounded-full bg-cream text-coffee-600 mb-4">
                    {previewItem.category}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-900 mb-3">
                    {previewItem.name}
                  </h3>
                  <p className="text-coffee-700 leading-relaxed mb-6">
                    {previewItem.description}
                  </p>
                  <div className="flex items-center justify-between gap-4 border-t border-coffee-200 pt-4">
                    <span className="text-gold font-bold text-2xl">
                      ₹{previewItem.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleWhatsAppOrder(previewItem)}
                      className="px-5 py-3 bg-gradient-to-r from-gold to-yellow-300 text-coffee-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      💬 Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
