import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Left - Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="group relative"
              >
                {link.name === 'Home' ? (
                  <div className="relative p-2 rounded-lg hover:bg-accent/10 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative"
                    >
                      <lord-icon
                        src="https://cdn.lordicon.com/pgirtdfe.json"
                        trigger="loop"
                        delay="3000"
                        style={{width: '24px', height: '24px'}}
                      ></lord-icon>
                      <div className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  </div>
                ) : (
                  <span className={`text-sm tracking-wider uppercase transition-colors duration-500 ${
                    location.pathname === link.path 
                      ? 'text-accent' 
                      : 'text-foreground/60 group-hover:text-foreground'
                  }`}>
                    {link.name}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Center - Logo */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 group">
            <div className="text-center">
              <span className="block font-bold text-2xl editorial-heading tracking-tight">
                Athlete<span className="text-accent">Hub</span>
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                Premium Sports Gear
              </span>
            </div>
          </Link>

          {/* Right - Actions */}
          <div className="flex items-center gap-4">
            <Link to="/cart" className="hidden md:block">
              <div className="relative p-2 rounded-lg hover:bg-accent/10 transition-all duration-300 group">
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/xktzfwru.json"
                    trigger="loop"
                    delay="3000"
                    style={{width: '28px', height: '28px'}}
                  ></lord-icon>
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
                {state.itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    key={state.itemCount}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
                  >
                    {state.itemCount}
                  </motion.span>
                )}
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="container-custom py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`py-4 px-4 transition-colors text-sm tracking-wider uppercase ${
                    location.pathname === link.path
                      ? 'text-accent font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/cart" className="mt-4 pt-4 border-t border-border">
                <Button variant="outline" className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Cart ({state.itemCount})
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
