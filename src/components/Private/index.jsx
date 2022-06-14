import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
export default function Index() {
    const [auth, setAuth] = useState({})

    useEffect(() => {

        setAuth(JSON.parse(localStorage.getItem("loginstatus")))
    }, [])
    return auth.status == true ? < Outlet /> : <Navigate to='/signup' />
}
