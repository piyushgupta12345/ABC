import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import Cookies from 'js-cookie'
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";

function Signin() {

  // create states
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // password hide and show state
  const [showPassword, setShowPassword] = useState(true)

  const hideShowPassword = () => {
    setShowPassword(!showPassword)
  }

  // use Context
  const { auth, setAuth } = useContext(AuthContext)

  // use navigate
  const navigate = useNavigate()


  // user Login function
  const userSignin = async () => {
    try {
      const response = await axios.post('http://localhost:7645/api/v1/auth/signin', { email, password }, { headers: { "Content-Type": 'application/json' }, withCredentials: true })
      console.log(response.data)

      // destructure response.data
      const { success, message } = response.data
      if (success) {
        // dispatch(signin(response.data))
        localStorage.setItem('authUser', JSON.stringify(response.data))
        setAuth({ ...auth, user: response.data.user, token: Cookies.get('token') })
        toast.success(message)
        navigate('/')
      } else {
        toast.error(message)
      }

      setEmail('')
      setPassword('')
    } catch (error) {
      toast.error("User Login failed")
      console.error(error)
    }
  }

  return (
    <>
      <div
        className="container bg-[url('https://as2.ftcdn.net/v2/jpg/05/96/47/67/1000_F_596476743_FGpRmpTN9fYhcghqZX4QaSsdQUOOIZWU.jpg')] bg-cover bg-center text-black h-screen w-screen flex justify-center items-center">

        {/* section Sign Up  */}
        <section
          className=' bg-black border-2 rounded-md flex flex-col justify-center items-center h-[500px] p-10 gap-8'>

          {/* Sign Up heading */}
          <h1
            className='text-4xl text-white select-none'>
            SignIn
          </h1>

          {/* Form container */}
          <div
            className='flex flex-col justify-center items-center gap-5'>

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


            {/* Sign Up button */}
            <button
              className='w-full mt-5 select-none text-white rounded-xl text-lg h-10 font-normal border-2 bg-[#18181B] hover:bg-black ease-in duration-500'
              onClick={userSignin}>
              Signin
            </button>

          </div>

          {/* Sign Up Form Link */}
          <p
            className='text-white select-none'>
            Don't you Register ?
            <Link
              className='text-blue-500 select-none'
              to={'/signup'}>
              Signup
            </Link>
          </p>

        </section>

      </div>
    </>
  )
}

export default Signin