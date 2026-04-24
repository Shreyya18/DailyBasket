

import React from 'react';
import '../UStyle/UHome.css';

const products = [
  { id: 1, name: "Fresh Apples", price: "₹120/kg", img: "https://via.placeholder.com/150" },
  { id: 2, name: "Milk", price: "₹60", img: "https://via.placeholder.com/150" },
  { id: 3, name: "Bread", price: "₹40", img: "https://via.placeholder.com/150" },
  { id: 4, name: "Tomatoes", price: "₹30/kg", img: "https://via.placeholder.com/150" },
];

const UHome = () => {
  return (
    <div className="u-container">
      <h2>🛒 DailyBasket</h2>

      <div className="search-bar">
        <input type="text" placeholder="Search groceries..." />
      </div>

      <div className="product-grid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UHome;