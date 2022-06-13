import { useState } from 'react'
import React from 'react'

import { Link } from 'react-router-dom'
import './style.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Header() {
    const onSubmit = () => {
        console.log("hello")
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div style={{
            width: "50vh",
            alignItems: "center",
            margin: 'auto',

        }}>

            <div style={{

                textAlign: "center",
                display: 'flex',
                height: "70vh",
                justifyContent: "center",
                alignItems: "center",


            }}>
                <form onSubmit={onSubmit}
                    style={{
                        boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
                        height: "50vh",
                        backgroundColor: "White",
                        borderRadius: "16px"
                    }}
                >

                    <div style={{
                        margin: "32px",
                        fontSize: "24px",
                    }}
                    >Welcome</div>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1 },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="name" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}
                            style={{ marginBottom: "16px", width: "80%" }}
                        />
                        <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}
                            style={{ marginBottom: "16px", width: "80%" }}
                        />
                        <TextField id="pwd_input" label="Password" type={'password'} variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}
                            style={{ marginBottom: "16px", width: "80%" }}
                        />
                    </Box>
                    <button className="register">Sign up</button>
                </form>
            </div>




        </ div >

    )
}
