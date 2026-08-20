import React, { useState } from "react";
import { useAdmin } from "../context/AdminContext";

export default function AdminLoginModal({ isOpen, onClose }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAdmin();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      if (login(password)) {
        setPassword("");
        onClose();
      } else {
        setError('Invalid password. Try "admin123" for demo.');
      }
      setLoading(false);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-slideUp">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-5xl block mb-4">🔐</span>
          <h2 className="font-serif text-3xl font-bold text-coffee-900 mb-2">
            Admin Login
          </h2>
          <p className="text-coffee-700 text-sm">
            Enter the admin password to manage products
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-coffee-900 mb-3">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 border-2 border-coffee-200 rounded-lg focus:outline-none focus:border-gold transition-colors"
              disabled={loading}
              autoFocus
            />
            <p className="text-xs text-coffee-600 mt-2">
              💡 Demo password:{" "}
              <span className="font-mono text-gold">admin123</span>
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
              <p className="text-red-700 text-sm font-semibold">⚠️ {error}</p>
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border-2 border-coffee-300 text-coffee-900 font-bold rounded-lg hover:bg-coffee-50 transition-colors"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-gold text-coffee-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 disabled:opacity-50 transform hover:scale-105"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Login"}
            </button>
          </div>
        </form>

        {/* Info Section */}
        <div className="mt-8 p-4 bg-coffee-50 rounded-lg border border-coffee-200">
          <p className="text-xs text-coffee-700 leading-relaxed">
            <strong>⚠️ Security Note:</strong> This is a demo implementation. In
            production, authentication should be handled securely through a
            backend server.
          </p>
        </div>
      </div>
    </div>
  );
}
