
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Twitter className="h-8 w-8 text-twitter-blue" />
            <span className="text-xl font-bold text-twitter-blue">BellaBuysDips</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                isActive 
                  ? "text-twitter-blue font-semibold" 
                  : "text-twitter-darkGray hover:text-twitter-blue transition"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/motherland" 
              className={({isActive}) => 
                isActive 
                  ? "text-twitter-blue font-semibold" 
                  : "text-twitter-darkGray hover:text-twitter-blue transition"
              }
            >
              Motherland
            </NavLink>
            <Button 
              size="sm" 
              className="bg-twitter-blue hover:bg-twitter-blue/90 text-white"
              onClick={() => window.open("https://x.com/bellabuysdips", "_blank")}
            >
              Follow
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-twitter-darkGray" />
              ) : (
                <Menu className="h-6 w-6 text-twitter-darkGray" />
              )}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4 pt-2 pb-3">
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  isActive 
                    ? "text-twitter-blue font-semibold px-3 py-2 rounded-md" 
                    : "text-twitter-darkGray hover:text-twitter-blue px-3 py-2 rounded-md transition"
                }
                onClick={() => setIsMenuOpen(false)}
                end
              >
                Home
              </NavLink>
              <NavLink 
                to="/motherland" 
                className={({isActive}) => 
                  isActive 
                    ? "text-twitter-blue font-semibold px-3 py-2 rounded-md" 
                    : "text-twitter-darkGray hover:text-twitter-blue px-3 py-2 rounded-md transition"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Motherland
              </NavLink>
              <Button 
                size="sm" 
                className="bg-twitter-blue hover:bg-twitter-blue/90 text-white w-full"
                onClick={() => window.open("https://x.com/bellabuysdips", "_blank")}
              >
                Follow @bellabuysdips
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
