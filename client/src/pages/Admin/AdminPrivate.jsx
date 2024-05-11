import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

function AdminPrivate() {

  const { auth } = useContext(AuthContext)

  // const user = true

  if (auth?.user?.role === 'admin') {
    return (
      <>
        <Outlet />
      </>
    )
  } else {
    return (
      <>
        <h1>Login require</h1>
      </>
    )
  }

}

export default AdminPrivate
