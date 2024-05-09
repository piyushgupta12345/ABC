import React from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slice/authSlice'

function Logout() {

    // use navigate
    const navigate = useNavigate()

    // use dispatch
    const dispatch = useDispatch()

    // user Logout function
    const userLogout = async () => {
        try {
            const response = await axios.get('http://localhost:7645/api/v1/auth/logout')
            console.log(response.data)

            // destructure response.data
            const { success, message } = response.data
            if (success) {
                dispatch(logout(response.data))
                toast.success(message)
                navigate('/signin')
            } else {
                toast.error(message)
            }

        } catch (error) {
            toast.error("User Logout failed")
            console.log(error)
        }
    }
    return (
        <div>
            <button className='bg-red-500 hover:bg-red-600 px-3 py-1 text-lg rounded-md border-none' onClick={userLogout}>Logout</button>
        </div>
    )
}

export default Logout
