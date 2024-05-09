import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

function Navbar() {
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState(true)

    function abc() {
        setMenu(!menu)
    }

    function a(e) {
        setSearch(console.log(e.target.value))
    }

    <header className=' bg-black text-white'>

        {/* navigation */}
        <nav className='flex justify-between items-center w-[90%] m-auto py-5  text-[20px]'>

            {/* logo */}
            <div className="logo font-semibold">
                ABCDE
            </div>

            {/* search bar */}
            <div className="serachBar flex items-center justify-center">
                <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search now'
                    className=' py-2 px-5 rounded-full w-[300px] text-green-400 outline-0 placeholder:text-red-600'
                />
                <IoIosSearch
                    className='text-[25px]'
                />
            </div>

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
                    <div className="serachBar flex items-center justify-center">
                        <input
                            type="search"
                            value={search}
                            onChange={a}
                            placeholder='Search now'
                            className=' py-2 px-5 rounded-full w-[300px] max-[500px]:w-[220px] text-green-400 outline-0 placeholder:text-red-600'
                        />
                        {/* <IoIosSearch
                            className='text-[25px]'
                        /> */}
                    </div>

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

                {/* service link */}
                <li className=' hover:text-sky-700 ease-in duration-500'>
                    <Link to={'/service'}>Service</Link>
                </li>

                {/* contact link */}
                <li className=' hover:text-sky-700 ease-in duration-500 pb-5'>
                    <Link to={'/contact'}>Contact</Link>
                </li>

            </ul>}

        </>
    )
}

export default Navbar
