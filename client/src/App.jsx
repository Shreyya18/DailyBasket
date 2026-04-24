import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import UserRoute from './Modules/User/URoutes/UserRoute'
import AdminRoute from './Modules/Admin/ARoutes/adminRoute'



const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/*' element={<UserRoute/>}/>
            <Route path='/Admin/*' element={<AdminRoute/>}/>

  
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App