import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'

function CompanyPrivate() {

  const { auth } = useContext(AuthContext)

  // const user = true

  if (auth?.user?.role === 'company') {
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

export default CompanyPrivate
