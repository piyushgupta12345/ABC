import React, { useContext } from 'react'
// import { IoIosSearch } from "react-icons/io";
import { AuthContext } from '../../context/AuthProvider'

function SearchBar() {

    const { searchItem, setSearchItem } = useContext(AuthContext)
    
    return (
        <>
            <div className="serachBar flex items-center justify-center">
                <input
                    type="search"
                    value={searchItem}
                    onChange={(e) => setSearchItem(e.target.value)}
                    placeholder='Search now'
                    className=' py-2 px-5 rounded-full w-[300px] text-green-400 outline-0 placeholder:text-red-600'
                />
                {/* <IoIosSearch
                    className='text-[25px]'
                /> */}
            </div>
        </>
    )
}

export default SearchBar
