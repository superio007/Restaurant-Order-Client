import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Clock, MinusCircle, PlusCircle } from 'lucide-react';

// Mock data for restaurant details and menu
const restaurantData = [
  {
    id: 1,
    name: "The Gourmet Kitchen",
    cuisine: "Contemporary",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    description:
      "Indulge in the art of fine dining with our contemporary creations, blending global flavors with locally sourced ingredients for a truly elevated experience.",
    menu: {
      Starters: [
        {
          id: 1,
          name: "Avocado Bruschetta",
          price: 13.99,
          description:
            "Crispy sourdough topped with smashed avocado, feta, and balsamic glaze",
        },
        {
          id: 2,
          name: "Pumpkin Soup",
          price: 9.99,
          description:
            "Roasted pumpkin blended with coconut cream and a hint of nutmeg",
        },
      ],
      "Main Course": [
        {
          id: 3,
          name: "Herb-Crusted Lamb",
          price: 32.99,
          description:
            "Juicy lamb chops coated with fresh herbs, served with roasted root vegetables",
        },
        {
          id: 4,
          name: "Stuffed Bell Peppers",
          price: 24.99,
          description:
            "Bell peppers filled with quinoa, chickpeas, and sundried tomatoes",
        },
      ],
      Desserts: [
        {
          id: 5,
          name: "Matcha Cheesecake",
          price: 12.99,
          description:
            "Creamy cheesecake infused with premium matcha and a graham cracker crust",
        },
        {
          id: 6,
          name: "Honey Panna Cotta",
          price: 10.99,
          description:
            "Silky panna cotta with a drizzle of wildflower honey and fresh berries",
        },
      ],
    },
  },
  {
    id: 2,
    name: "Pasta Paradise",
    cuisine: "Italian",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    description:
      "Step into a haven for pasta lovers, where authentic Italian recipes meet the finest ingredients for a taste of Italy in every bite.",
    menu: {
      Starters: [
        {
          id: 1,
          name: "Caprese Salad",
          price: 10.99,
          description:
            "Fresh mozzarella, vine-ripened tomatoes, and basil drizzled with olive oil",
        },
        {
          id: 2,
          name: "Garlic Bread with Cheese",
          price: 7.99,
          description:
            "Classic Italian bread topped with garlic butter and melted mozzarella",
        },
      ],
      "Main Course": [
        {
          id: 3,
          name: "Fettuccine Alfredo",
          price: 19.99,
          description:
            "Rich and creamy Alfredo sauce tossed with fettuccine pasta",
        },
        {
          id: 4,
          name: "Margherita Pizza",
          price: 18.99,
          description:
            "Thin crust pizza topped with tomato sauce, fresh mozzarella, and basil",
        },
      ],
      Desserts: [
        {
          id: 5,
          name: "Tiramisu",
          price: 9.99,
          description:
            "Layers of espresso-soaked ladyfingers and mascarpone cream dusted with cocoa",
        },
        {
          id: 6,
          name: "Cannoli",
          price: 8.99,
          description:
            "Crispy pastry shells filled with sweet ricotta and chocolate chips",
        },
      ],
    },
  },
  {
    id: 3,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    description:
      "Embark on a culinary journey to Japan with our expertly crafted sushi and traditional Japanese dishes, made with the freshest ingredients.",
    menu: {
      Starters: [
        {
          id: 1,
          name: "Edamame",
          price: 6.99,
          description:
            "Steamed soybeans lightly salted for a perfect appetizer",
        },
        {
          id: 2,
          name: "Miso Soup",
          price: 5.99,
          description:
            "Traditional Japanese soup with tofu, seaweed, and scallions",
        },
      ],
      "Main Course": [
        {
          id: 3,
          name: "Sashimi Platter",
          price: 29.99,
          description:
            "An assortment of fresh tuna, salmon, and yellowtail sashimi",
        },
        {
          id: 4,
          name: "Dragon Roll",
          price: 22.99,
          description:
            "Eel, cucumber, and avocado topped with thinly sliced avocado and unagi sauce",
        },
      ],
      Desserts: [
        {
          id: 5,
          name: "Mochi Ice Cream",
          price: 8.99,
          description: "Soft and chewy rice cake filled with creamy ice cream",
        },
        {
          id: 6,
          name: "Matcha Roll Cake",
          price: 9.99,
          description:
            "Light and fluffy sponge cake rolled with matcha-flavored cream",
        },
      ],
    },
  },
];


function MenuItem({ item, onAdd, onRemove, quantity }) {
  return (
    <div className="flex justify-between items-center p-4 border-b">
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">{item.description}</p>
        <p className="text-orange-600 font-semibold mt-1">
          ${item.price.toFixed(2)}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onRemove(item)}
          className={`text-gray-500 hover:text-orange-600 ${
            !quantity && "opacity-50 cursor-not-allowed"
          }`}
          disabled={!quantity}
        >
          <MinusCircle className="w-6 h-6" />
        </button>
        <span className="w-8 text-center">{quantity || 0}</span>
        <button
          onClick={() => onAdd(item)}
          className="text-gray-500 hover:text-orange-600"
        >
          <PlusCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

function RestaurantMenu() {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const restaurant = restaurantData.find((r) => r.id === parseInt(id)); // Use restaurantData instead of restaurants
  const [cart, setCart] = useState({});
  const [tableNumber, setTableNumber] = useState("");

  if (!restaurant) {
    return <p>Restaurant not found</p>;
  }

  const addToCart = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const removeFromCart = (item) => {
    if (!cart[item.id]) return;
    setCart((prev) => ({
      ...prev,
      [item.id]: prev[item.id] - 1,
    }));
  };

  const calculateTotal = () =>
    Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = Object.values(restaurant.menu)
        .flat()
        .find((menuItem) => menuItem.id === parseInt(itemId));
      return total + (item?.price || 0) * quantity;
    }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Restaurant Header */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-8">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{restaurant.rating}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-1" />
                <span>30-45 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table Number Input */}
      <div className="mb-8">
        <label
          htmlFor="table-number"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Table Number
        </label>
        <input
          type="number"
          id="table-number"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
          placeholder="Enter your table number"
          className="w-full md:w-64 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      {/* Menu Sections */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          {Object.entries(restaurant.menu).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold mb-4">{category}</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {items.map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item}
                    onAdd={addToCart}
                    onRemove={removeFromCart}
                    quantity={cart[item.id]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="sticky top-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            {Object.entries(cart)
              .filter(([_, quantity]) => quantity > 0)
              .map(([itemId, quantity]) => {
                const item = Object.values(restaurant.menu)
                  .flat()
                  .find((menuItem) => menuItem.id === parseInt(itemId));
                return (
                  <div key={itemId} className="flex justify-between py-2">
                    <span>
                      {item.name} x {quantity}
                    </span>
                    <span>${(item.price * quantity).toFixed(2)}</span>
                  </div>
                );
              })}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            <button
              className="w-full bg-orange-600 text-white py-3 rounded-lg mt-6 hover:bg-orange-700 transition-colors"
              disabled={
                !tableNumber || Object.values(cart).every((v) => v === 0)
              }
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
