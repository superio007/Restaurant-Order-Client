import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Star, Clock, MinusCircle, PlusCircle } from "lucide-react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState({});
  const [tableNumber, setTableNumber] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  // Fetch Restaurant Data
  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/restaurants/${id}`);
        if (!res.ok) throw new Error("Failed to fetch restaurant data");
        const data = await res.json();
        setRestaurantData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRestaurantData();
  }, [id]);

  // Fetch Menu Data
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/menu-items/${id}`);
        if (!res.ok) throw new Error("Failed to fetch menu items");
        const data = await res.json();
        setMenuItems(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMenuData();
  }, [id]);

  // Categorize menu into sections
  function categorizeMenu(items) {
    const menu = {};
    items.forEach((item) => {
      const category = item.category || "Uncategorized";
      if (!menu[category]) menu[category] = [];
      menu[category].push({
        id: item.id,
        name: item.name,
        price: parseFloat(item.price),
        description: `Delicious ${item.name} served fresh!`,
      });
    });
    return menu;
  }

  const menu = categorizeMenu(menuItems);

  if (!restaurantData) {
    return <p>Loading...</p>;
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
      const item = Object.values(menu)
        .flat()
        .find((menuItem) => menuItem.id === parseInt(itemId));
      return total + (item?.price || 0) * quantity;
    }, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Restaurant Header */}
      <div className="relative h-64 rounded-xl overflow-hidden mb-8">
        <img
          src={restaurantData.image}
          alt={restaurantData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
          <div className="p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{restaurantData.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span>{restaurantData.rating}</span>
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
          {Object.entries(menu).map(([category, items]) => (
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
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your full name"
                {...register("name", { required: "Full name is required" })}
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </Form.Group>

            {/* Phone Number Field */}
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number (10 digits required)",
                  },
                })}
              />
              {errors.phone && (
                <p className="text-danger">{errors.phone.message}</p>
              )}
            </Form.Group>

            {/* Email Field */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        {/* Order Summary */}
        <div className="sticky top-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            {Object.entries(cart)
              .filter(([_, quantity]) => quantity > 0)
              .map(([itemId, quantity]) => {
                const item = Object.values(menu)
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
              onClick={handleShow}
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
