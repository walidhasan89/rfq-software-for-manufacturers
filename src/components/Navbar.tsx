import { useState, useEffect } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const CHROME_EXT_URL = 'https://chromewebstore.google.com/detail/rfq-autopilot/akeilceddenpdgocpcmoiemfhpaofebl';

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Use Cases', href: '#use-cases' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-[rgba(8,12,36,0.88)] backdrop-blur-xl shadow-lg shadow-black/20'
              : 'bg-[rgba(255,255,255,0.85)] backdrop-blur-xl shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 shrink-0">
              <img
                src="https://rfqautopilot.com/asset/logo.png"
                alt="RFQ AutoPilot Logo"
                className="h-8 w-8 rounded-lg object-contain"
              />
              <span className={`font-semibold text-base tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                RFQ <span className="gradient-text">AutoPilot</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                    darkMode
                      ? 'text-gray-300 hover:text-white hover:bg-white/5'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className={`p-2 rounded-lg transition-all duration-200 cursor-pointer ${
                  darkMode ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {darkMode ? (
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* CTA */}
              <a
                href={CHROME_EXT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white gradient-brand btn-glow transition-all duration-300"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
                Add to Chrome — It's Free
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 rounded-lg transition-colors cursor-pointer ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 transform transition-transform duration-350 ease-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        } ${darkMode ? 'bg-[#080c24]' : 'bg-white'} shadow-2xl`}
      >
        <div className="flex items-center justify-between p-5 border-b border-gray-200/20">
          <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Menu</span>
          <button
            onClick={() => setMobileOpen(false)}
            className={`p-1.5 rounded-lg cursor-pointer ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-5 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                darkMode ? 'text-gray-300 hover:text-white hover:bg-white/5' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-4">
            <a
              href={CHROME_EXT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white gradient-brand"
            >
              Add to Chrome — It's Free
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
