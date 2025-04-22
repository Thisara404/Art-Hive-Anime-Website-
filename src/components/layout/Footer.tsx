
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl bg-gradient-to-r from-ct-blue-500 to-ct-teal-500 bg-clip-text text-transparent mb-4">
              Create & Trade
            </h3>
            <p className="text-gray-600 mb-4">
              Empowering creators to showcase, sell, and engage with their audience through digital content.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ct-blue-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ct-blue-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ct-blue-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ct-blue-500">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/digital-art" className="text-gray-600 hover:text-ct-blue-500">
                  Digital Art
                </Link>
              </li>
              <li>
                <Link to="/category/templates" className="text-gray-600 hover:text-ct-blue-500">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/category/courses" className="text-gray-600 hover:text-ct-blue-500">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/category/e-books" className="text-gray-600 hover:text-ct-blue-500">
                  E-books
                </Link>
              </li>
              <li>
                <Link to="/featured" className="text-gray-600 hover:text-ct-blue-500">
                  Featured Content
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-ct-blue-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-ct-blue-500">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-ct-blue-500">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-ct-blue-500">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-ct-blue-500">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2" />
                <span>support@createandtrade.lk</span>
              </li>
              <li className="text-gray-600">
                123 Digital Avenue, Colombo 04
              </li>
              <li className="text-gray-600">
                Sri Lanka
              </li>
              <li className="text-gray-600">
                Tel: +94 11 234 5678
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Create & Trade. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                All prices are in <span className="font-medium">LKR (Sri Lankan Rupees)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
