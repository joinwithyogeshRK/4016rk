import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Screenshot_2025_05_24_191408 from '../assets/images/screenshot-2025-05-24-191408-1755201597561.png';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={Screenshot_2025_05_24_191408} alt="GTA VI Logo" className="h-10 w-auto" />
          <Link to="/" className="text-2xl font-bold neon-text">GTA VI</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-primary' : ''}`}>Home</Link>
          <Link to="/characters" className={`nav-link ${location.pathname === '/characters' ? 'text-primary' : ''}`}>Characters</Link>
          <Link to="/locations" className={`nav-link ${location.pathname === '/locations' ? 'text-primary' : ''}`}>Locations</Link>
          <Link to="/features" className={`nav-link ${location.pathname === '/features' ? 'text-primary' : ''}`}>Features</Link>
          <Link to="/preorder">
            <Button className="btn-primary">Pre-order</Button>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface/95 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link to="/" className={`nav-link text-lg ${location.pathname === '/' ? 'text-primary' : ''}`}>Home</Link>
              <Link to="/characters" className={`nav-link text-lg ${location.pathname === '/characters' ? 'text-primary' : ''}`}>Characters</Link>
              <Link to="/locations" className={`nav-link text-lg ${location.pathname === '/locations' ? 'text-primary' : ''}`}>Locations</Link>
              <Link to="/features" className={`nav-link text-lg ${location.pathname === '/features' ? 'text-primary' : ''}`}>Features</Link>
              <Link to="/preorder" className="mt-2">
                <Button className="btn-primary w-full">Pre-order</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
