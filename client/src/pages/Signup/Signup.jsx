import React, { useState, useContext } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import Cookies from 'js-cookie'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

function Signup() {
  // create states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  // password hide and show state
  const [showPassword, setShowPassword] = useState(true)

  const hideShowPassword = () => {
    setShowPassword(!showPassword)
  }

  // use Context
  const { auth, setAuth } = useContext(AuthContext)

  // use navigate
  const navigate = useNavigate()

  const checkRole = (value) => {
    console.log(value)
    setRole(value)
    // console.log(role)
  }


  // user Register function
  const userSignup = async () => {
    try {
      const response = await axios.post('http://localhost:7645/api/v1/auth/signup', { name, email, password, role }, {
        headers: { "Content-Type": 'application/json' },
        withCredentials: true
      }
      )
      console.log(response.data)

      // destructure response.data
      const { success, message } = response.data
      if (success) {
        // dispatch(signup(response.data))
        localStorage.setItem('authUser', JSON.stringify(response.data))
        setAuth({ ...auth, user: response.data.user, token: Cookies.get('token') })
        toast.success(message)
        navigate('/')
      } else {
        toast.error(message)
      }

      setName('')
      setEmail('')
      setPassword('')
      setRole('')
    } catch (error) {
      toast.error("User Register failed")
      console.error(error)
    }
  }

  return (
    <>
      <div
        className="container bg-[url('https://as2.ftcdn.net/v2/jpg/05/96/47/67/1000_F_596476743_FGpRmpTN9fYhcghqZX4QaSsdQUOOIZWU.jpg')] bg-cover bg-center bg-black text-black h-screen w-screen flex justify-center items-center">

        {/* section Sign In  */}
        <section
          className='bg-black border-2 rounded-md flex flex-col justify-center items-center  p-10 gap-10'>

          {/* Sign In heading */}
          <h1
            className='text-4xl text-white select-none'>
            SignUp
          </h1>

          {/* Form container */}
          <div
            className='flex flex-col justify-center items-center gap-5'>

            {/* input name */}
            <input
              type="text"
              placeholder='Enter your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='rounded-full py-2 px-5 text-xl'
            />

            {/* input email */}
            <input
              type="email"
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='rounded-full py-2 px-5 text-xl'
            />

            {/* input password */}
            <div className=' '>

              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='rounded-full py-2 px-5 text-xl'
              />

              {
                showPassword ?
                  <BiSolidShow
                    onClick={hideShowPassword}
                    className='bg-white cursor-pointer relative bottom-7 left-60'
                  />
                  :
                  <BiSolidHide
                    onClick={hideShowPassword}
                    className='bg-white cursor-pointer relative bottom-7 left-60'
                  />
              }

            </div>

            {/* input role */}
            <div className='text-white flex items-center gap-12'>

              <div className='flex items-center gap-2'>

                <label htmlFor="user">User</label>
                <input
                  type="checkbox"
                  name="role"
                  id="user"
                  value={'user'}
                  checked={role === 'user'}
                  onChange={(e) => checkRole(e.target.value)}
                />

              </div>

              <div className='flex items-center gap-2'>

                <label htmlFor="company">Company</label>
                <input
                  type="checkbox"
                  name="role"
                  id="company"
                  value={'company'}
                  checked={role === 'company'}
                  onChange={(e) => checkRole(e.target.value)}
                />

              </div>

            </div>

            {/* <input
              type="text"
              placeholder='Enter your role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className='rounded-full py-2 px-5 text-xl'
            /> */}

            {/* Sign In button */}
            <button
              className='w-full mt-5 select-none text-white rounded-xl text-lg h-10 font-normal border-2 bg-[#18181B] hover:bg-black ease-in duration-500'
              onClick={userSignup}>
              Signup
            </button>

          </div>

          {/* Sign In Form Link */}
          <p
            className='text-white select-none'>
            you have allready Register ?
            <Link
              className='text-blue-500 select-none'
              to={'/signin'}> Signin
            </Link>
          </p>

        </section>

      </div>
    </>
  )
}

export default Signup
