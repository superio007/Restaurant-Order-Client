import React from 'react';
import { UtensilsCrossed, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full text-center">
        <div className="mb-8">
          <div className="p-3  rounded-full inline-block mb-4">
            {/* <UtensilsCrossed className="h-12 w-12 text-white" /> */}
            <img
              src="src\assets\logo-transparent-svg.svg"
              alt=""
              style={{ width: "6rem" }}
            />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            Oops! Looks like the page you're looking for has gone on a lunch
            break.
          </p>
        </div>

        <div className="space-y-4">
          <span className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF4500] text-white rounded-lg hover:bg-[#CC3700] transition-colors duration-200">
            <Link to={"/"} className='flex items-center gap-2'>
              <Home size={18} />Back to Home
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NotFound;