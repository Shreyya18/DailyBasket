import React from 'react'
import {Route, Routes} from 'react-router-dom'
import AHome from '../AComponents/AHome'
import Sidebar from '../AComponents/Sidebar'
import ViewUser from '../AComponents/ViewUser'
import AddCategory from '../AComponents/AddCategory'
import ManageCategory from '../AComponents/ManageCategory'
import ManageProduct from '../AComponents/ManageProduct'
import ManageUser from '../AComponents/ManageUser'
import ViewProduct from '../AComponents/ViewProduct'
import ViewCategory from '../AComponents/ViewCategory'
import UpdateCategory from '../AComponents/UpdateCategory'
import AddProduct from '../AComponents/AddProduct'
import UpdateProduct from '../AComponents/UpdateProduct'
import AdminLogin from '../AComponents/AdminLogin'
import ViewBooking from '../AComponents/ViewBooking'
const AdminRoutes = () => {
  return (
    <div>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<AHome/>} />
        <Route path='/AddProduct' element={<AddProduct/>} />
        <Route path='/AddCategory' element={<AddCategory/>} />
        <Route path='/ManageCategory' element={<ManageCategory/>}  />
        <Route path='ManageProduct' element={<ManageProduct/>} />
        <Route path='/ManageUser' element={<ManageUser/>} />
        <Route path='/ViewUser' element={<ViewUser
ViewUser/>} />
        <Route path='/ViewProduct' element={<ViewProduct/>} />
        <Route path='/ViewCategory' element={<ViewCategory/>} />
        <Route path='UpdateCategory/:id' element={<UpdateCategory/>} />
        <Route path='/UpdateProduct/:id' element={<UpdateProduct/>} />
         <Route path='/UpdateProduct/:id' element={<UpdateProduct/>} />
        <Route path='/AdminLogin' element={<AdminLogin/>}/>
        <Route path='/ViewBooking' element={<ViewBooking/>}/>
      </Routes>
    </div>
  )
}

export default AdminRoutes