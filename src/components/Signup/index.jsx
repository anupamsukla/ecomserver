import React from 'react'
import Header from './Header'

import Footer from './Footer'
import Body from "./Body"
import './style.css'
export default function index() {
    return (
        <>
            <div style={{
                background: "linear-gradient(180deg, #127CC0 0%, #FFFFFF 100%)",
            }}>
                <Header />
                <Body />
                <Footer />
            </div>
        </>
    )
}


