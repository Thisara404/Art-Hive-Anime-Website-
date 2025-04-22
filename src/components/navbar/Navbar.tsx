import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { CATEGORIES } from "@/lib/constants";
import SearchDialog from "../common/SearchDialog";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-ct-blue-500 to-ct-teal-500 bg-clip-text text-transparent">Create & Trade</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/" className="font-medium transition-colors hover:text-ct-blue-500">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium transition-colors hover:text-ct-blue-500">
                Categories
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/about" className="font-medium transition-colors hover:text-ct-blue-500">
              About Us
            </Link>
            <Link to="/contact" className="font-medium transition-colors hover:text-ct-blue-500">
              Contact Us
            </Link>
          </nav>
        </div>
        
        <div className="flex-1 md:hidden">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-lg bg-gradient-to-r from-ct-blue-500 to-ct-teal-500 bg-clip-text text-transparent">C&T</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Button>
          
          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/auth">
            <Button variant="ghost" size="icon" aria-label="User Account">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && <MobileNav />}
      
      {/* Search Dialog */}
      <SearchDialog isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
};

export default Navbar;
