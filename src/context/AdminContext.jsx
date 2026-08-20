import React, { createContext, useState, useContext, useEffect } from "react";

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [adminProducts, setAdminProducts] = useState([]);

  // Load products from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem("adminProducts");
    if (savedProducts) {
      setAdminProducts(JSON.parse(savedProducts));
    }
  }, []);

  {/*Save products to localStorage whenever they change*/}
  useEffect(() => {
    localStorage.setItem("adminProducts", JSON.stringify(adminProducts));
  }, [adminProducts]);

  const login = (password) => {
    // Demo admin password: "admin123"
    // In production, this would be handled by a backend server
    if (password === "admin123") {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
  };

  const addProduct = (product) => {
    const newProduct = {
      id: Math.max(...adminProducts.map((p) => p.id || 0), 16) + 1,
      ...product,
      isCustom: true,
    };
    setAdminProducts([...adminProducts, newProduct]);
    return newProduct;
  };

  const deleteProduct = (productId) => {
    setAdminProducts(adminProducts.filter((p) => p.id !== productId));
  };

  const editProduct = (productId, updatedProduct) => {
    setAdminProducts(
      adminProducts.map((p) =>
        p.id === productId ? { ...p, ...updatedProduct } : p,
      ),
    );
  };

  return (
    <AdminContext.Provider
      value={{
        isAdminLoggedIn,
        adminProducts,
        login,
        logout,
        addProduct,
        deleteProduct,
        editProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error("useAdmin must be used within AdminProvider");
  }
  return context;
}
