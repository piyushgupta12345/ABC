import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { toast } from 'react-hot-toast'
import axios from 'axios'

function Profile() {

  // use states
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [bio, setBio] = useState('')
  const [instagram, setInstagram] = useState('')
  const [twitter, setTwitter] = useState('')

  const { auth, setAuth } = useContext(AuthContext)


  const getProfileData = () => {
    const { name, email, password } = auth.user
    setFullName(name)
    setEmail(email)
    setPassword(password)
    console.log(name)
  }

  const updateProfile = async (id) => {
    try {
      const res = await axios.put(`http://localhost:7645/api/v1/user/updateuser/${id}`, { fullName, email, password, phone, location, bio, instagram, twitter }, { headers: { "Content-Type": 'application/json' }, withCredentials: true })
      console.log(res.data)
    } catch (error) {
      console.log(error)
      toast.error(error)
    }
  }


  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <>
      <section className=' py-5 px-6 flex flex-col gap-5'>

        {/* Work Experience heading */}
        <h2 className='text-[30px] text-center max-[1024px]:text-[27px] font-bold mb-5'>
          User Profile
        </h2>

        <div className=' grid grid-cols-1 gap-x-5 gap-y-10  max-[550px]:gap-y-7'>

          {/* FullName */}
          <div className=' flex flex-col gap-5 max-[550px]:gap-3'>

            <label htmlFor="FullName" className='text-[18px] font-bold'>
              FullName <span className='text-red-500'>*</span>
            </label>

            <input
              type="text"
              id='FullName'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className=' border-[1px] border-black py-2 px-3 text-[18px] rounded-md'
            />

          </div>

          <div className=' grid grid-cols-2 gap-x-5 gap-y-10 max-[550px]:gap-y-7 max-[550px]:grid-cols-1'>

            {/* Email */}
            <div className='flex flex-col gap-5 max-[550px]:gap-3'>

              <label htmlFor="Email" className='text-[18px] font-bold'>
                Email <span className='text-red-500'>*</span>
              </label>

              <input
                type='email'
                id='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className=' border-[1px] border-black py-2 px-3 text-[18px] rounded-md'
              />

            </div>

            {/* Password */}
            <div className='flex flex-col gap-5 max-[550px]:gap-3'>

              <label htmlFor="Password" className='text-[18px] font-bold'>
                Password <span className='text-red-500'>*</span>
              </label>

              <input
                type='password'
                id='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className=' border-[1px] border-black py-2 px-3 text-[18px] rounded-md'
              />

            </div>

            {/* Designation */}
            <div className='flex flex-col gap-5 max-[550px]:gap-3'>

              <label htmlFor="Phone" className='text-[18px] font-bold'>
                Phone <span className='text-red-500'>*</span>
              </label>

              <input
                type='number'
                id='Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className=' border-[1px] border-black py-2 px-3 text-[18px] rounded-md'
              />

            </div>

            {/* Location */}
            <div className='flex flex-col gap-5 max-[550px]:gap-3'>

              <label htmlFor="Location" className='text-[18px] font-bold'>
                Location <span className='text-red-500'>*</span>
              </label>

              <input
                type="text"
                id='Location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className=' border-[1px] border-black py-2 px-3 text-[18px] rounded-md'
              />

            </div>

          </div>

          {/* About Us */}
          <div className='flex flex-col gap-5 max-[550px]:gap-3'>

            <label htmlFor="About Us" className='text-[18px] font-bold'>
              Bio <span className='text-red-500'>*</span>
            </label>

            <textarea
              id='About Us'
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className=' border-[1px] border-black min-h-[140px] py-2 px-3 text-[18px] rounded-md'
            >
            </textarea>

          </div>

          {/* Instagram Url */}
          <div className=' flex flex-col gap-5 max-[550px]:gap-3'>

            <label htmlFor="Instagram" className='text-[18px] font-bold'>
              Instagram <span className='text-red-500'>*</span>
            </label>

            <input
              type="text"
              id='Instagram'
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              required
              className=' border-[1px] border-black py-2 px-3 text-[18px] rounded-md'
            />

          </div>

          {/* Twitter Url */}
          <div className=' flex flex-col gap-5 max-[550px]:gap-3'>

            <label htmlFor="Twitter" className='text-[18px] font-bold'>
              Twitter <span className='text-red-500'>*</span>
            </label>

            <input
              type="text"
              id='Twitter'
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
              required
              className=' border-[1px] border-black py-2 px-3 text-[18px] rounded-md'
            />

          </div>

          {/* btn group */}
          <div className='btn-group'>

            {/* Update Profile button */}
            <button
              onClick={updateProfile}
              className=' bg-blue-600 hover:bg-blue-700 text-lg font-semibold text-white rounded-lg mr-4 px-6 py-2' type="submit">
              Update Profile
            </button>

          </div>

        </div>

        {/* img */}
        <img
          src="https://hindgreco.com/wp-content/uploads/2022/05/businessmen-working-strategic-planning-1200x675.jpg"
          alt="not_found_img"
        />

      </section>
    </>

  )
}

export default Profile