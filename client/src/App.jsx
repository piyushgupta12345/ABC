import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'
import About from './pages/About/About'
import Profile from './pages/user/Profile/Profile'
import UserHome from './pages/user/UserHome/UserHome'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/userhome' element={<UserHome />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App
