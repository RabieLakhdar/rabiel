import React from 'react';
import { Menu, X, Github, Twitter, Mail, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">rabiel.dev</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/RabieLakhdar" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-indigo-600">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rabie-lakhdar" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-indigo-600">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com/rabiel_dev" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-indigo-600">
              <Twitter size={20} />
            </a>
            <a href="mailto:hello@rabiel.dev" className="text-gray-600 hover:text-indigo-600">
              <Mail size={20} />
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header