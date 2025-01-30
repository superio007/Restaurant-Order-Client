import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{ position: "relative", bottom: "0" }}
      className="bg-[#1A1A2E] text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">QuickBite</h3>
            <p className="text-gray-400">
              Making restaurant ordering simple and efficient
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to={"/pricing"}>Pricing</Link>
              </li>
              <li>
                <Link to={"/integration"}>Integration</Link>
              </li>
              <li>
                <Link to={"/docs"}>Documentation</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/careers"}>Careers</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link to={"/terms-of-service"}>Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Quick Bite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
