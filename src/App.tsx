import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Header from "./components/header";
import "./App.css";
import Hero from "./components/hero";
import TextSection from "./components/text-section";
import { heroDataOne, heroDataTwo } from "./data/heroData";
import { textSectionDataOne, textSectionDataTwo } from "./data/textSectionData";
import Footer from "./components/footer";
import { footerData } from "./data/footerData";
import InsightsSection from "./components/insights";
import { cardsData } from "./data/cardsData";
import ServicesSection from "./components/services";
import TestimonialSection from "./components/testimonial";

function App() {
  // Optional: Define animation variants for reusability (e.g., for different effects per section)
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Start invisible and 50px below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }, // Smooth slide-up fade-in
    },
  };

  return (
    <>
      <Header />

      {/* First Hero Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }} // Animate once, trigger 100px early
        className="scroll-section" // Optional: Add a class for custom CSS if needed
      >
        <Hero
          title={heroDataOne.title}
          subtitle={heroDataOne.subtitle}
          background={heroDataOne.background}
          overlay={heroDataOne.overlay}
          cta={heroDataOne.cta}
        />
      </motion.div>

      {/* First Text Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-section"
      >
        <TextSection data={textSectionDataOne} />
      </motion.div>

      {/* Second Hero Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-section"
      >
        <Hero
          title={heroDataTwo.title}
          subtitle={heroDataTwo.subtitle}
          background={heroDataTwo.background}
          overlay={heroDataTwo.overlay}
          cta={heroDataTwo.cta}
        />
      </motion.div>

      {/* Second Text Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-section"
      >
        <TextSection data={textSectionDataTwo} />
      </motion.div>

      {/* Services Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-section"
      >
        <ServicesSection />
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-section"
      >
        <TestimonialSection />
      </motion.div>

      {/* Insights Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-section"
      >
        <InsightsSection cards={cardsData} />
      </motion.div>

      {/* Footer (Optional: No animation or subtle one) */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="scroll-section"
      >
        <Footer data={footerData} />
      </motion.div>
    </>
  );
}

export default App;
