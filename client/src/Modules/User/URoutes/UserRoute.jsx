import React from 'react'
import UHome from '../UComponents/UHome'
import { Route, Routes, useLocation } from 'react-router-dom'
import Register from '../UComponents/Register';
import Topbar from '../UComponents/Topbar';
import Login from '../UComponents/Login';
// import AddProduct from '../UComponents/AddProduct';
import Products from '../UComponents/Products';
import MyProfile from '../UComponents/MyProfile';
import BookingForm from '../UComponents/BookingForm';
import ProductDetails from '../UComponents/ProductDetails';
import TrackStatus from '../UComponents/TrackStatus';

function AppContent() {
  const location = useLocation();
  const hidetopbar = ['/Login', '/Register']
  return (
    <div>
      {
        !hidetopbar.includes(location.pathname) &&
        <Topbar />
      }
      <Routes>
        <Route path='/' element={<UHome />} />
        {/* <Route path='/About' element={<UAbout/>}/> */}
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        {/* <Route path='/AddProduct' element={<AddProduct/>} /> */}
        <Route path='/Products' element={<Products />} />
        <Route path='/MyProfile' element={<MyProfile />} />
        <Route path='/TrackStatus' element={<TrackStatus />} />
        <Route path='/Product/:id' element={<ProductDetails />} />
        <Route path='/BookingForm/:productId' element={<BookingForm/>} />
      </Routes>
    </div>
  )
}
const UserRoute = () => {
  return (
    <div>
      <AppContent />
    </div>
  )
}

export default UserRoute