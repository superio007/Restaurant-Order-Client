import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import RestaurantMenu from "./pages/RestaurantMenu";
import Contact from "./pages/Contact";
import About from "./pages/AboutUs";
const restaurants = [
  {
    id: 1,
    name: "The Gourmet Kitchen",
    cuisine: "Contemporary",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    location: "Downtown",
    priceRange: "$$",
  },
  {
    id: 2,
    name: "Pasta Paradise",
    cuisine: "Italian",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    location: "Westside",
    priceRange: "$$",
  },
  {
    id: 3,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
    location: "Eastside",
    priceRange: "$$$",
  },
];
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/restaurants"
            element={<Restaurants restaurants={restaurants} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/restaurants/:id" element={<RestaurantMenu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
