import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import ProjectSection from './component/ProjectSection';
import SkillSection from './component/SkillSection';
import AboutSection from './component/AboutSection';
import ContactSection from './component/ContactSection';

function App() {
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
