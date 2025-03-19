import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Define navigation links as an array of objects
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full z-50 px-8 py-4 flex justify-between items-center bg-slate-900/90 backdrop-blur-md">
      <div className="logo text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent">
        Fawad Iqbal
      </div>
      <nav role="navigation" aria-label="Main Navigation">
        <button 
          onClick={toggleMenu} 
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMenuOpen}
          className="hamburger md:hidden cursor-pointer focus:outline-none"
        >
          <div className="w-6 h-0.5 bg-slate-50 my-1.5"></div>
          <div className="w-6 h-0.5 bg-slate-50 my-1.5"></div>
          <div className="w-6 h-0.5 bg-slate-50 my-1.5"></div>
        </button>
        <ul
          className={`fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-slate-900/95 backdrop-blur-md flex flex-col items-center gap-8 pt-8 transition-transform duration-300 transform ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:static md:flex md:flex-row md:gap-8 md:pt-0 md:translate-x-0`}
        >
          {navLinks.map(link => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                onClick={() => scrollToSection(link.id)}
                className="text-slate-50 hover:text-blue-400 transition-colors font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
