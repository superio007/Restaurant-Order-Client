import React from "react";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import { PiRocketLaunchBold } from "react-icons/pi";
import { IoMdSpeedometer } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineAddBusiness } from "react-icons/md";
import FeatureCard from "../components/FeatureCard";
import { BiTrendingUp } from "react-icons/bi";
import { IoHappyOutline } from "react-icons/io5";

const AboutUs = () => {
  return (
    <>
      {/* Heading Section */}
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <h1 className="text-4xl font-bold text-center text-gray-900">
            About QuickBite
          </h1>
        </div>
      </div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant ordering system"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Food Service: About QuickBite
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              At QuickBite, we’re transforming how small food vendors and Quick
              Service Restaurants operate. Our self-ordering solution simplifies
              operations with QR code menus, real-time order tracking, and
              secure payments, eliminating inefficiencies and providing valuable
              insights. Designed for scalability and ease, we help vendors
              succeed in the fast-paced food industry. Join us in redefining
              food ordering!
            </p>
            <div className="flex space-x-4">
              <Link
                to="/restaurants"
                className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transition-colors"
              >
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Focus Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" id="focus">
        <h2 className="text-3xl font-bold text-center mb-12">
          How QuickBite Stands Out!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={RiCustomerService2Fill}
            title="Customer-Centric Design"
            description="Highlight how QuickBite improves customer experiences through real-time updates, personalized recommendations, and mobile-first interfaces."
          />
          <FeatureCard
            icon={MdOutlineAddBusiness}
            title="Vendor Empowerment"
            description="Talk about how QuickBite supports vendors with data insights, operational efficiencies, and secure payment options."
          />
          <FeatureCard
            icon={PiRocketLaunchBold}
            title="Future-Proof Technology"
            description="Explain how QuickBite is built for scalability and growth, including AI-driven analytics, loyalty programs, and seamless multi-location support."
          />
        </div>
      </div>
      {/* Key benifits Section */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
        id="key-benifits"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Benefits of Using QuickBite
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={BiTrendingUp}
            title="Boost Sales"
            description="Explain how data insights and streamlined operations increase sales."
          />
          <FeatureCard
            icon={IoMdSpeedometer}
            title="Streamline Operations"
            description="Focus on efficiency improvements for order management and menu updates."
          />
          <FeatureCard
            icon={IoHappyOutline}
            title="Delight Customers"
            description="Highlight features like order tracking, easy payments, and real-time updates."
          />
        </div>
      </div>
      {/* Testamonials Section */}
      <div className="max-w-7xl mx-auto px-4 gap-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Partners Say
        </h2>
        <Testimonial />
      </div>
      {/* CTA Section */}
      <div className="bg-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Any Quries?</h2>
          <p className="text-xl mb-8">
            Contact us resolve your your quries at ease and get best services.
          </p>
          <Link
            to="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-full hover:bg-orange-50 transition-colors"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
