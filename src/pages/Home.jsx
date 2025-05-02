import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Education from "../components/Education";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-[#1F304C] text-white font-sans">
      <Header />
      <About />
      <Projects />
      <Services />
      <Education />
      <Footer />
    </div>
  );
}
