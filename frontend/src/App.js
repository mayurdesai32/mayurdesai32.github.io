import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import ProjectSection from './component/ProjectSection';
import SkillSection from './component/SkillSection';
import AboutSection from './component/AboutSection';
import ContactSection from './component/ContactSection';

function App() {
  useEffect(() => {
    AOS.init({ 'data-aos-once': 'true' });
  }, []);
  return (
    <div id='app'>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />

      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
