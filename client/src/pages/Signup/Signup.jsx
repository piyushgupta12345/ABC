import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup } from '../../redux/slice/authSlice'

function Signup() {
  // create states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  // use navigate
  const navigate = useNavigate()

  // use dispatch
  const dispatch = useDispatch()

  // user Register function
  const userSignup = async () => {
    try {
      const response = await axios.post('http://localhost:7645/api/v1/auth/signup', { name, email, password }, { headers: { "Content-Type": 'application/json' } })
      console.log(response.data)

      // destructure response.data
      const { success, message } = response.data
      if (success) {
        dispatch(signup(response.data))
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
            SignIn
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
            <input
              type="password"
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='rounded-full py-2 px-5 text-xl'
            />

            {/* input role */}
            <input
              type="text"
              placeholder='Enter your role'
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className='rounded-full py-2 px-5 text-xl'
            />

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
