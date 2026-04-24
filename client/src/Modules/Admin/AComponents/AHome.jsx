import React from 'react';

const AHome = () => {
  return (
    <>
      {/* CSS inside same file */}
      <style>
        {`
          .admin-container {
            padding: 20px;
            background: #f4f6f9;
            min-height: 100vh;
            font-family: Arial, sans-serif;
          }

          .admin-header h2 {
            margin: 0;
          }

          .admin-header p {
            color: gray;
            margin-bottom: 20px;
          }

          .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
          }

          .card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            transition: 0.3s;
          }

          .card:hover {
            transform: translateY(-5px);
          }

          .card h3 {
            margin-bottom: 10px;
          }

          .card p {
            font-size: 20px;
            font-weight: bold;
          }

          .actions {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 30px;
          }

          .actions button {
            padding: 10px 15px;
            background: #1976d2;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: 0.3s;
          }

          .actions button:hover {
            background: #125ea2;
          }

          .activity {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }

          .activity ul {
            padding-left: 20px;
          }
        `}
      </style>

      <div className="admin-container">

        {/* Header */}
        <div className="admin-header">
          <h2>📊 Admin Dashboard</h2>
          <p>Manage your grocery application</p>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="card">
            <h3>👤 Users</h3>
            <p>120</p>
          </div>
          <div className="card">
            <h3>🛒 Orders</h3>
            <p>75</p>
          </div>
          <div className="card">
            <h3>📦 Products</h3>
            <p>40</p>
          </div>
          <div className="card">
            <h3>💰 Revenue</h3>
            <p>₹25,000</p>
          </div>
        </div>

        {/* Actions */}
        <div className="actions">
          <button>➕ Add Product</button>
          <button>📂 Manage Category</button>
          <button>📦 Manage Orders</button>
          <button>👥 View Users</button>
        </div>

        {/* Activity */}
        <div className="activity">
          <h3>📌 Recent Activity</h3>
          <ul>
            <li>New user registered</li>
            <li>Order #1023 placed</li>
            <li>Product "Milk" added</li>
          </ul>
        </div>

      </div>
    </>
  );
};

export default AHome;