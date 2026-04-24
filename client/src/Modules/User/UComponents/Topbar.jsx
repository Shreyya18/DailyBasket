import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Topbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const token = localStorage.getItem("UserToken");

  const handleLogout = () => {
    localStorage.removeItem("UserToken");
    navigate("/login");
  };

  return (
    <>
      {/* Internal CSS */}
      <style>
        {`
          .topbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #2e7d32;
            color: white;
            padding: 12px 25px;
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .logo {
            font-size: 22px;
            font-weight: bold;
            cursor: pointer;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 20px;
          }

          .nav-links span {
            cursor: pointer;
            font-size: 16px;
            transition: 0.3s;
          }

          .nav-links span:hover {
            color: #c8e6c9;
          }

          .profile {
            position: relative;
          }

          .dropdown {
            position: absolute;
            top: 35px;
            right: 0;
            background: white;
            color: black;
            border-radius: 8px;
            width: 140px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
          }

          .dropdown p {
            padding: 10px;
            margin: 0;
            cursor: pointer;
          }

          .dropdown p:hover {
            background: #f1f1f1;
          }
        `}
      </style>

      <div className="topbar">
        {/* Logo */}
        <div className="logo" onClick={() => navigate("/")}>
          🛒 DailyBasket
        </div>

        {/* Navigation */}
        <div className="nav-links">
          <span onClick={() => navigate("/products")}>Products</span>
          <span onClick={() => navigate("/cart")}>Cart 🛍️</span>

          {!token ? (
            <>
              <span onClick={() => navigate("/login")}>Login</span>
              <span onClick={() => navigate("/register")}>Register</span>
            </>
          ) : (
            <div className="profile">
              <span onClick={() => setShowMenu(!showMenu)}>👤 Profile</span>

              {showMenu && (
                <div className="dropdown">
                  <p onClick={() => navigate("/myprofile")}>My Profile</p>
                  <p onClick={handleLogout}>Logout</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Topbar;