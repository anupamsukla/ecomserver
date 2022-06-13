import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
export default function Header() {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/updateproduct">Update Products</Link></li>
                    <li><Link to="/deleteproduct">Delete Products</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/signup">Sign up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>
        </>

    )
}
