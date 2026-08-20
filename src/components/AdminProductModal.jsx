import React, { useState } from "react";
import { useAdmin } from "../context/AdminContext";

export default function AdminProductModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Coffee",
    emoji: "☕",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const { addProduct, adminProducts, deleteProduct } = useAdmin();

  const categories = [
    "Coffee",
    "Cold Beverages",
    "Breakfast",
    "Sandwich",
    "Pastries",
    "Cake",
  ];
  const emojis = ["☕", "🧊", "🍪", "🥪", "🧁", "🥣", "🍳", "🥐", "🍫"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setMessageType("error");
      setMessage("Please enter product name");
      return;
    }
    if (!formData.price || parseFloat(formData.price) <= 0) {
      setMessageType("error");
      setMessage("Please enter a valid price");
      return;
    }
    if (!formData.description.trim()) {
      setMessageType("error");
      setMessage("Please enter product description");
      return;
    }

    // Add product
    addProduct({
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      emoji: formData.emoji,
    });

    // Show success message
    setMessageType("success");
    setMessage(`"${formData.name}" added successfully! 🎉`);

    // Reset form
    setFormData({
      name: "",
      description: "",
      price: "",
      category: "Coffee",
      emoji: "☕",
    });

    // Clear message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 my-8 animate-slideUp">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="font-serif text-3xl font-bold text-coffee-900 mb-1">
              📦 Product Management
            </h2>
            <p className="text-coffee-700 text-sm">
              Add, view, or remove products from the menu
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-2xl text-coffee-600 hover:text-coffee-900 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Tabs Navigation */}
        <div className="flex gap-4 mb-8 border-b-2 border-coffee-200">
          <button className="px-4 py-3 border-b-2 border-gold text-gold font-bold">
            ➕ Add Product
          </button>
          <button className="px-4 py-3 text-coffee-600 font-semibold hover:text-gold transition-colors">
            📋 View Products ({adminProducts.length})
          </button>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-coffee-900 mb-2">
              Product Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Caramel Macchiato"
              className="w-full px-4 py-3 border-2 border-coffee-200 rounded-lg focus:outline-none focus:border-gold transition-colors"
            />
          </div>

          {/* Product Description */}
          <div>
            <label className="block text-sm font-semibold text-coffee-900 mb-2">
              Product Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter a short description of the product"
              rows="3"
              className="w-full px-4 py-3 border-2 border-coffee-200 rounded-lg focus:outline-none focus:border-gold transition-colors resize-none"
            />
          </div>

          {/* Grid for Price, Category, and Emoji */}
          <div className="grid sm:grid-cols-3 gap-4">
            {/* Price */}
            <div>
              <label className="block text-sm font-semibold text-coffee-900 mb-2">
                Price (₹) *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="e.g., 150"
                min="0"
                step="10"
                className="w-full px-4 py-3 border-2 border-coffee-200 rounded-lg focus:outline-none focus:border-gold transition-colors"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-coffee-900 mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-coffee-200 rounded-lg focus:outline-none focus:border-gold transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Emoji */}
            <div>
              <label className="block text-sm font-semibold text-coffee-900 mb-2">
                Icon/Emoji
              </label>
              <select
                name="emoji"
                value={formData.emoji}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-coffee-200 rounded-lg focus:outline-none focus:border-gold transition-colors text-lg"
              >
                {emojis.map((emoji) => (
                  <option key={emoji} value={emoji}>
                    {emoji}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`p-4 rounded-lg border-l-4 ${
                messageType === "success"
                  ? "bg-green-50 border-green-500 text-green-700"
                  : "bg-red-50 border-red-500 text-red-700"
              }`}
            >
              <p className="font-semibold text-sm">
                {messageType === "success" ? "✓" : "⚠️"} {message}
              </p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-4 border-t border-coffee-200">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border-2 border-coffee-300 text-coffee-900 font-bold rounded-lg hover:bg-coffee-50 transition-colors"
            >
              Close
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-gradient-to-r from-gold to-yellow-300 text-coffee-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              ➕ Add Product
            </button>
          </div>
        </form>

        {/* Admin Products List */}
        {adminProducts.length > 0 && (
          <div className="mt-8 pt-8 border-t border-coffee-200">
            <h3 className="font-bold text-lg text-coffee-900 mb-4">
              📋 Custom Products ({adminProducts.length})
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {adminProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between bg-coffee-50 p-4 rounded-lg border border-coffee-200"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-coffee-900 flex items-center gap-2">
                      <span className="text-2xl">{product.emoji}</span>
                      {product.name}
                    </p>
                    <p className="text-sm text-coffee-700 line-clamp-1">
                      {product.description}
                    </p>
                    <div className="flex gap-3 mt-2 text-xs">
                      <span className="text-gold font-bold">
                        ₹{product.price}
                      </span>
                      <span className="bg-white px-2 py-1 rounded text-coffee-700">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="ml-4 px-3 py-2 bg-red-100 text-red-600 font-bold rounded hover:bg-red-200 transition-colors"
                  >
                    🗑️ Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
