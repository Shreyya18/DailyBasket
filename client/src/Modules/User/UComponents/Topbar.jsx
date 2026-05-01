// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Topbar = () => {
//   const navigate = useNavigate();
//   const [showMenu, setShowMenu] = useState(false);

//   const token = localStorage.getItem("UserToken");

//   const handleLogout = () => {
//     localStorage.removeItem("UserToken");
//     navigate("/login");
//   };

//   return (
//     <>
//       {/* Internal CSS */}
//       <style>
//         {`
//           .topbar {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             background: #2e7d32;
//             color: white;
//             padding: 12px 25px;
//             position: sticky;
//             top: 0;
//             z-index: 100;
//           }

//           .logo {
//             font-size: 22px;
//             font-weight: bold;
//             cursor: pointer;
//           }

//           .nav-links {
//             display: flex;
//             align-items: center;
//             gap: 20px;
//           }

//           .nav-links span {
//             cursor: pointer;
//             font-size: 16px;
//             transition: 0.3s;
//           }

//           .nav-links span:hover {
//             color: #c8e6c9;
//           }

//           .profile {
//             position: relative;
//           }

//           .dropdown {
//             position: absolute;
//             top: 35px;
//             right: 0;
//             background: white;
//             color: black;
//             border-radius: 8px;
//             width: 140px;
//             box-shadow: 0 2px 10px rgba(0,0,0,0.2);
//           }

//           .dropdown p {
//             padding: 10px;
//             margin: 0;
//             cursor: pointer;
//           }

//           .dropdown p:hover {
//             background: #f1f1f1;
//           }
//         `}
//       </style>

//       <div className="topbar">
//         {/* Logo */}
//         <div className="logo" onClick={() => navigate("/")}>
//           🛒 DailyBasket
//         </div>

//         {/* Navigation */}
//         <div className="nav-links">
//           <span onClick={() => navigate("/products")}>Products</span>
//           <span onClick={() => navigate("/cart")}>Cart 🛍️</span>

//           {!token ? (
//             <>
//               <span onClick={() => navigate("/login")}>Login</span>
//               <span onClick={() => navigate("/register")}>Register</span>
//             </>
//           ) : (
//             <div className="profile">
//               <span onClick={() => setShowMenu(!showMenu)}>👤 Profile</span>

//               {showMenu && (
//                 <div className="dropdown">
//                   <p onClick={() => navigate("/myprofile")}>My Profile</p>
//                   <p onClick={handleLogout}>Logout</p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Topbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = [
  { name: "About Us", path: "/about" },
  { name: "Shop Now", path: "/shop" },
  { name: "FAQ", path: "/faq" },
  { name: "Products", path: "/Products" }
];

const token=localStorage.getItem('UserToken')
console.log(token)
const settings=token?['Profile','Logout']:['Login']
function TopBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate=useNavigate()
  


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const HandleNavigate=(path)=>navigate(path)
   const handleSettings=(set)=>{
    if(set==='Logout'){
      alert("Are you sure  you want to logout")
      localStorage.removeItem('UserToken')
      navigate('/Login')
    }
    else if(set==='Profile'){
      navigate('/MyProfile')
    }
   }

   
  return (
    <AppBar position="static" sx={{backgroundColor:'black'}}> 
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <ShoppingCartIcon/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            InstantStyle
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={()=>HandleNavigate(page.path)}>
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            InstantStyle
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,fontFamily:'monospace'} }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={()=>HandleNavigate(page.path)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>handleSettings(setting)}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default TopBar;