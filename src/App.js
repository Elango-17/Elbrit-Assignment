import React from "react";
import "@fontsource/poppins";

import HeroSection from "./components/HeroSection";
// import Features from "./components/Features";
import Ingredients from "./components/Ingredients";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <HeroSection />
      {/* <Features /> */}
      <Ingredients />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
