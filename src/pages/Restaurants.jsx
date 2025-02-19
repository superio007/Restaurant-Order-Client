import {React} from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';

// Mock data for restaurants


function RestaurantCard({ restaurant }) {
  return (
    <Link to={`/restaurants/${restaurant.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold">{restaurant.name}</h3>
            <span className="text-gray-600">{restaurant.priceRange}</span>
          </div>
          <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span>{restaurant.rating}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 mr-1" />
              <span>{restaurant.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Restaurants({apiRes}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-8">Restaurants</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {apiRes.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Restaurants;