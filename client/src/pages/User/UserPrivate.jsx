import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

function UserPrivate() {

    const { auth } = useContext(AuthContext)

    if (auth?.user?.role === 'user') {
        return <Outlet />
    } else {
        return (
            <>
                <h1>Login Require</h1>
            </>
        )
    }
}

export default UserPrivate