import { useState } from 'react'
import React from 'react'

import { Link } from 'react-router-dom'
import './style.css'
import { Box, TextField, Button } from '@mui/material/';


export default function Header() {
    const onSubmit = () => {
        console.log("hello")
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>

            <div>
                <form onSubmit={onSubmit} >

                    <div id="HeadlineMedium">Welcome</div>

                    <Box
                        component="form"
                        sx={{
                            "& > :not(style)": { m: 1, width: "90%" }
                        }}
                        noValidate
                        autoComplete="on"
                    >
                        <TextField id="name" label="Name" variant="filled" value={name} onChange={(e) => setName(e.target.value)}
                            style={{ marginBottom: "16px" }}
                        />
                        <TextField id="email" label="Email" variant="filled" value={email} onChange={(e) => setEmail(e.target.value)}
                            style={{ marginBottom: "16px" }}
                        />
                        <TextField id="pwd_input" label="Password" type={'password'} variant="filled" value={password} onChange={(e) => setPassword(e.target.value)}
                            style={{ marginBottom: "16px" }}
                        />
                    </Box>
                    <button id="getIn">Log in</button>
                </form>
            </div>




        </div >

    )
}
