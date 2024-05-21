import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import SearchBar from '../SearchBar/SearchBar';
import { AuthContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast'
import axios from 'axios'


function Navbar() {
    const [menu, setMenu] = useState(true)

    const { auth, setAuth } = useContext(AuthContext)

    // use navigate
    const navigate = useNavigate()

    // const logoutHandler = () => {
    //     localStorage.removeItem('authUser')
    //     setAuth({ ...auth, user: null })
    //     navigate('/signin')
    //     toast.success("Logout Successfully")
    // }

    const logoutHandler = async () => {
        const res = await axios.get('http://localhost:7645/api/v1/auth/logout', { headers: { "Content-Type": 'application/json' }, withCredentials: true })
        localStorage.removeItem('authUser')
        setAuth({ ...auth, user: null })
    }

    function abc() {
        setMenu(!menu)
    }

    <header className=' bg-black text-white'>

        {/* navigation */}
        <nav className='flex justify-between items-center w-[90%] m-auto py-5  text-[20px]'>

            {/* logo */}
            <div className="logo font-semibold">
                ABCDE
            </div>

            {/* search bar */}
            <SearchBar />

            {/* links */}
            <ul className='flex justify-between items-center gap-5'>

                {/* home link */}
                <li className=' hover:text-sky-700 ease-in duration-500'>
                    <Link to={'/'}>Home</Link>
                </li>

                {/* about link */}
                <li className=' hover:text-sky-700 ease-in duration-500'>
                    <Link to={'/about'}>About</Link>
                </li>

                {/* service link */}
                <li className=' hover:text-sky-700 ease-in duration-500'>
                    <Link to={'/service'}>Service</Link>
                </li>

                {/* contact link */}
                <li className=' hover:text-sky-700 ease-in duration-500'>
                    <Link to={'/contact'}>Contact</Link>
                </li>

            </ul>

        </nav>

    </header>

    return (
        <>
            {/* header */}
            <header className=' bg-black text-white'>

                {/* navigation */}
                <nav className='flex justify-between items-center w-[90%] m-auto py-5 text-[20px] gap-5'>

                    {/* logo */}
                    <div className="logo font-semibold max-[400px]:hidden">
                        ABCDE
                    </div>

                    {/* search bar */}
                    <SearchBar />

                    {/* links */}
                    {menu ? <FaBars className=' cursor-pointer text-[30px]' onClick={abc} /> :
                        <>
                            <RxCross1 className=' cursor-pointer text-[30px]' onClick={abc} />

                        </>
                    }
                </nav>

            </header>

            {menu ? '' : <ul className='flex flex-col bg-black text-white justify-between items-start pl-16 gap-5'>

                {/* home link */}
                <li className=' hover:text-sky-700 ease-in duration-500'>
                    <Link to={'/'}>Home</Link>
                </li>

                {/* about link */}
                <li className=' hover:text-sky-700 ease-in duration-500'>
                    <Link to={'/about'}>About</Link>
                </li>

                {auth.user?.role ?
                    <>
                        {/* Logout link */}
                        <li className=' hover:text-sky-700 ease-in duration-500'>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>

                        {auth?.user?.role === 'user' ?
                            <>
                                {/* user link */}
                                <li className=' hover:text-sky-700 ease-in duration-500'>
                                    <Link to={'user'}>User</Link>
                                </li>

                                {/* profile link */}
                                <li className=' hover:text-sky-700 ease-in duration-500'>
                                    <Link to={'user/profile'}>Profile</Link>
                                </li>
                            </>
                            :
                            <>
                                {auth?.user?.role === 'company' ?
                                    <>
                                        {/* company link */}
                                        <li className=' hover:text-sky-700 ease-in duration-500'>
                                            <Link to={'/company'}>Company</Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        {/* company link */}
                                        <li className=' hover:text-sky-700 ease-in duration-500'>
                                            <Link to={'/admin'}>Admin</Link>
                                        </li>
                                    </>
                                }

                            </>
                        }
                    </>
                    :
                    <>
                        {/* Sign Up link */}
                        <li className=' hover:text-sky-700 ease-in duration-500'>
                            <Link to={'/signup'}>SignUP</Link>
                        </li>

                        {/* Sign In link */}
                        <li className=' hover:text-sky-700 ease-in duration-500'>
                            <Link to={'/signin'}>SignIn</Link>
                        </li>

                        {/* service link */}
                        <li className=' hover:text-sky-700 ease-in duration-500'>
                            <Link to={'/service'}>Service</Link>
                        </li>
                    </>
                }



                {/* contact link */}
                <li className=' hover:text-sky-700 ease-in duration-500 pb-5'>
                    <Link to={'/contact'}>Contact</Link>
                </li>

            </ul >}

        </>
    )
}

export default Navbar
