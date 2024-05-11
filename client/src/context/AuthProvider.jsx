import cookieParser from 'cookie-parser'
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider({ children }) {

    const [searchItem, setSearchItem] = useState('')

    const [auth, setAuth] = useState({
        user:null,
        token:''
    })

    useEffect(() => {
        const data = localStorage.getItem('authUser')
        const parseData = JSON.parse(data)
        if (parseData) {
            setAuth({...auth, user:parseData.user, token:parseData.token})
        }
    },[])

    return (
        <AuthContext.Provider value={{ auth, setAuth, searchItem, setSearchItem }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
