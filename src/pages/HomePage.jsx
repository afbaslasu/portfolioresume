// src/pages/HomePage.jsx
import React from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import { StatsSection } from "../components/StatsSection";
import SkillsSection from "../components/SkillsSection";
import { ResumeSection } from "../components/ResumeSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { ServicesSection } from "../components/ServicesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ContactSection } from "../components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ResumeSection />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
