import React from "react";
import { AdminProvider } from "./context/AdminContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Owner from "./components/Owner";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <AdminProvider>
      <div className="bg-cream min-h-screen">
        <Header />
        <main>
          <Hero />
          <Owner />
          <Menu />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </AdminProvider>
  );
}

export default App;
