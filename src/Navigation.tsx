import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4">
        <div className="text-xl font-bold text-center md:text-left">PATRICIA PATURLE <span className="text-sm block md:inline">CRMMG 34274 | REQ 23480</span></div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-primary transition-colors duration-200">Início</a></li>
          <li><a href="#services" className="hover:text-primary transition-colors duration-200">Serviços</a></li>
          <li><a href="#about" className="hover:text-primary transition-colors duration-200">Sobre</a></li>
          <li><a href="#faq" className="hover:text-primary transition-colors duration-200">FAQ</a></li>
          <li><a href="#blog" className="hover:text-primary transition-colors duration-200">Blog</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors duration-200">Contato</a></li>
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 min-w-[48px] min-h-[48px] transition-transform duration-200 hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="transition-transform duration-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>
      {/* Mobile Menu Dropdown with Smooth Transition */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <ul className="flex flex-col space-y-4 px-4 py-4 bg-white items-center border-t border-gray-100">
          <li><a href="#home" className="block hover:text-primary active:text-primary transition-colors duration-200 py-2" onClick={() => setIsOpen(false)}>Início</a></li>
          <li><a href="#services" className="block hover:text-primary active:text-primary transition-colors duration-200 py-2" onClick={() => setIsOpen(false)}>Serviços</a></li>
          <li><a href="#about" className="block hover:text-primary active:text-primary transition-colors duration-200 py-2" onClick={() => setIsOpen(false)}>Sobre</a></li>
          <li><a href="#faq" className="block hover:text-primary active:text-primary transition-colors duration-200 py-2" onClick={() => setIsOpen(false)}>FAQ</a></li>
          <li><a href="#blog" className="block hover:text-primary active:text-primary transition-colors duration-200 py-2" onClick={() => setIsOpen(false)}>Blog</a></li>
          <li><a href="#contact" className="block hover:text-primary active:text-primary transition-colors duration-200 py-2" onClick={() => setIsOpen(false)}>Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;