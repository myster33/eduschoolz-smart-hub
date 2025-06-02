import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: 'Home',
    href: '/'
  }, {
    name: 'Product',
    href: '/features'
  }, {
    name: 'Extra Services',
    href: '/how-it-works'
  }, {
    name: 'Contact us',
    href: '/contact'
  }];
  const isActive = (href: string) => location.pathname === href;
  return <header className="bg-primary shadow-lg border-b border-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/a20110c0-261e-4f09-8208-467d1faa7b06.png" alt="Eduschoolz" className="h-8 w-auto filter brightness-0 invert" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`text-sm font-medium transition-colors hover:text-white ${isActive(item.href) ? 'text-white' : 'text-primary-100'}`}>
                {item.name}
              </Link>)}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            
            <Button size="sm" className="bg-accent-coral hover:bg-red-600 text-white">
              BOOK NOW
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-primary-600 border-t border-primary-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map(item => <Link key={item.name} to={item.href} className={`block px-3 py-2 text-base font-medium transition-colors ${isActive(item.href) ? 'text-white bg-primary-700' : 'text-primary-100'}`} onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>)}
            <div className="pt-4 pb-2 space-y-2">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                Log In
              </Button>
              <Button className="w-full bg-accent-coral hover:bg-red-600 text-white">
                BOOK NOW
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;