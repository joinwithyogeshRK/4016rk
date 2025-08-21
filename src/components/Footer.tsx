import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, Youtube, Twitch } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-foreground/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">GTA VI</h3>
            <p className="text-sm">
              The next chapter in the Grand Theft Auto series. Coming Fall 2025.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/characters" className="hover:text-primary transition-colors">Characters</Link></li>
              <li><Link to="/locations" className="hover:text-primary transition-colors">Locations</Link></li>
              <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/preorder" className="hover:text-primary transition-colors">Pre-order</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">EULA</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com/rockstargames" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/rockstargames" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/rockstargames" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/rockstargames" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://twitch.tv/rockstargames" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitch className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            &copy; {currentYear} Rockstar Games, Inc. All trademarks are property of their respective owners.
          </div>
          <div className="flex items-center">
            <img src="/images/rockstar-logo.jpg" alt="Rockstar Games" className="h-8 w-8 mr-2" />
            <span className="text-sm">A Rockstar Games Production</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
