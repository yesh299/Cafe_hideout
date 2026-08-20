import React, { useState } from "react";
import { useAdmin } from "../context/AdminContext";
import AdminLoginModal from "./AdminLoginModal";
import AdminProductModal from "./AdminProductModal";

export default function AdminButton() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showUserMessage, setShowUserMessage] = useState(false);
  const { isAdminLoggedIn, logout } = useAdmin();

  const handleAddProductClick = () => {
    if (!isAdminLoggedIn) {
      // Show user message
      setShowUserMessage(true);
      setTimeout(() => setShowUserMessage(false), 3000);
      return;
    }
    setShowProductModal(true);
  };

  return (
    <>
      {/* User Message Modal */}
      {showUserMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 animate-slideDown">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg px-6 py-4 shadow-lg max-w-sm">
            <p className="text-blue-900 font-semibold text-center">
              ✨ This feature is for admin use only. Thank you.
            </p>
          </div>
        </div>
      )}

      {/* Admin Button */}
      <div className="flex gap-2">
        <button
          onClick={handleAddProductClick}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          title={isAdminLoggedIn ? "Manage products" : "Admin only"}
        >
          <span>📦</span>
          <span className="text-sm">Add Product</span>
          {isAdminLoggedIn && (
            <span className="ml-1 w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
          )}
        </button>

        {isAdminLoggedIn && (
          <button
            onClick={logout}
            className="hidden md:px-3 md:py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-colors text-sm"
            title="Logout from admin"
          >
            🚪 Logout
          </button>
        )}

        {!isAdminLoggedIn && (
          <button
            onClick={() => setShowLoginModal(true)}
            className="hidden md:px-3 md:py-2 bg-amber-600 text-white font-bold rounded-lg hover:bg-amber-700 transition-colors text-sm"
            title="Login as admin"
          >
            🔐 Admin
          </button>
        )}
      </div>

      {/* Modals */}
      <AdminLoginModal
        isOpen={showLoginModal}
        onClose={() => {
          setShowLoginModal(false);
          setShowProductModal(true);
        }}
      />
      <AdminProductModal
        isOpen={showProductModal}
        onClose={() => setShowProductModal(false)}
      />
    </>
  );
}
