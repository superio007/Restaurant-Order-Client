import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Smartphone, Clock, BarChart3, Shield, Menu } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Restaurant with Smart Self-Ordering
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Empower your customers with contactless ordering and streamline your operations with our innovative QR-based solution.
            </p>
            <div className="flex space-x-4">
              <Link to="/restaurants" className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors">
                Order Now
              </Link>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80" 
              alt="Restaurant ordering system" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="features">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose QuickBite?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={QrCode}
            title="QR Code Ordering"
            description="Simple scan-and-order system that works directly from customers' smartphones"
          />
          <FeatureCard 
            icon={Smartphone}
            title="Mobile-First Design"
            description="Intuitive interface optimized for the best mobile ordering experience"
          />
          <FeatureCard 
            icon={Clock}
            title="Real-Time Updates"
            description="Live order tracking and status updates for both customers and staff"
          />
          <FeatureCard 
            icon={BarChart3}
            title="Advanced Analytics"
            description="Detailed insights into sales, popular items, and customer behavior"
          />
          <FeatureCard 
            icon={Shield}
            title="Secure Payments"
            description="Safe and reliable payment processing for peace of mind"
          />
          <FeatureCard 
            icon={Menu}
            title="Menu Management"
            description="Easy-to-use tools for updating menus and managing inventory"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Order?</h2>
          <p className="text-xl mb-8">Browse our partner restaurants and enjoy a seamless ordering experience</p>
          <Link to="/restaurants" className="bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition-colors">
            View Restaurants
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;