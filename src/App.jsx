import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Ai from "./Components/Ai/Ai";
import Iphone from "./Components/Iphone/Iphone";

import MultipleItems from "./Components/MultipleItems/MultipleItems";
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <div className="main">
      <>
        <Navbar />
        <Hero />
        <Ai />
        <Iphone />
        <MultipleItems />
        <Footer />
      </>
    </div>
  );
}
