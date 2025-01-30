import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Menu className="w-8 h-8 text-orange-600" />
            <img
              src="src\assets\site-horizontal-v1.svg"
              alt="site-horizontal-v1"
              style={{width:"14rem"}}
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-orange-600">
              Home
            </Link>
            <Link
              to="/restaurants"
              className="text-gray-600 hover:text-orange-600"
            >
              Order Now
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-orange-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-orange-600">
              Contact
            </Link>
          </div>
          <Link
            to="/restaurants"
            className="bg-orange-600 text-white px-md-6 py-md-2  px-1.5 py-1 rounded-full hover:bg-orange-700 transition-colors"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;