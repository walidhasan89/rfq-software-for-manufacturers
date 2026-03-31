import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Problem from './components/Problem';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import ROI from './components/ROI';
import Integration from './components/Integration';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first, then system preference
    const stored = localStorage.getItem('rfq-theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('rfq-theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  }, [darkMode]);

  // Scroll animation observer
  useEffect(() => {
    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
            }
          });
        },
        { threshold: 0.07, rootMargin: '0px 0px -30px 0px' }
      );

      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((el) => observer.observe(el));
      return observer;
    };

    const observer = observeElements();

    // Re-observe after layout settles for dynamic content
    const timer1 = setTimeout(() => {
      const newElements = document.querySelectorAll('.scroll-animate:not(.in-view)');
      newElements.forEach((el) => observer.observe(el));
    }, 300);

    const timer2 = setTimeout(() => {
      const newElements = document.querySelectorAll('.scroll-animate:not(.in-view)');
      newElements.forEach((el) => observer.observe(el));
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div style={{ fontFamily: "'Inter', 'Plus Jakarta Sans', sans-serif" }}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero darkMode={darkMode} />
          <Stats darkMode={darkMode} />
          <Problem darkMode={darkMode} />
          <Features darkMode={darkMode} />
          <HowItWorks darkMode={darkMode} />
          <Integration darkMode={darkMode} />
          <ROI darkMode={darkMode} />
          <UseCases darkMode={darkMode} />
          <Pricing darkMode={darkMode} />
          <FAQ darkMode={darkMode} />
          <FinalCTA darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
