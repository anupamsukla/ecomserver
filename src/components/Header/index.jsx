import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Header() {
    const [auth, setAuth] = useState({})

    useEffect(() => {
        setAuth(JSON.parse(localStorage.getItem("loginstatus")))
    })

    return (
        <>
            <div className="navbar">
                <ul>
                    {
                        auth.status ?
                            <>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/updateproduct">Update Products</Link></li>
                                <li><Link to="/deleteproduct">Delete Products</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                                <li><Link to="/logout">Logout</Link></li>

                            </>
                            :
                            <>
                                <li><Link to="/signup">Sign up</Link></li>
                                <li><Link to="/login">Login</Link></li>

                            </>


                    }

                </ul>
            </div>
        </>

    )
}
