import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'
import About from './pages/About/About'
import UserPrivate from './pages/User/UserPrivate'
import Profile from './pages/User/Profile'
import UserDashboard from './pages/User/UserDashboard'
import CompanyPrivate from './pages/Company/CompanyPrivate'
import CompanyDashboard from './pages/Company/CompanyDashboard'
import AdminPrivate from './pages/Admin/AdminPrivate'
import AdminDashboard from './pages/Admin/AdminDashboard'
import Aaa from './components/Card/Aaa'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/try' element={<Aaa />} />

      <Route path='/user' element={<UserPrivate />}>
        <Route path='' element={<UserDashboard />} />
        <Route path='profile' element={<Profile />} />
      </Route>

      <Route path='/admin' element={<AdminPrivate />}>
        <Route path='' element={<AdminDashboard />} />
      </Route>

      <Route path='/company' element={<CompanyPrivate />}>
        <Route path='' element={<CompanyDashboard />} />
      </Route>

    </Routes>
  )
}

export default App
