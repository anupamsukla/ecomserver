import { useState, useEffect } from 'react'
import React from 'react'

import './style.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'


export default function Header() {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem("loginstatus")) || ""

        if (auth.status) {
            navigate('/')
        }
    }, [])

    const onSubmit = async (event) => {
        // if (user !== "" && email !== "" && password !== '') {
        console.log("hello")
        navigate('/signup')


        // }
        // else {
        //     setError("Please fill all necessary details")
        // }
    }


    return (
        <div style={{
            width: "50vh",
            alignItems: "center",
            margin: 'auto',

        }}>

            <div style={{

                textAlign: "center",
                display: 'flex',
                height: "80vh",
                justifyContent: "center",
                alignItems: "center",


            }}>
                <form onSubmit={onSubmit}
                    style={{
                        boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
                        backgroundColor: "White",
                        borderRadius: "16px",
                        paddingBottom: "24px"
                    }}
                >

                    <div style={{
                        margin: "32px",
                        fontSize: "24px",
                    }}
                    >Welcome</div>
                    <Box
                        component="form"

                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="user" label="Username" variant="outlined" value={user} onChange={(e) => setUser(e.target.value)}
                            style={{ marginBottom: "16px", width: "80%" }}
                        />
                        <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}
                            style={{ marginBottom: "16px", width: "80%" }}
                        />
                        <TextField id="pwd_input" label="Password" type={'password'} variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}
                            style={{
                                marginBottom: "6px",
                                width: "80%",
                            }}
                        />
                    </Box>
                    {error && <div className={"error-msg"}>{error}</div>}
                    <button className="register">Sign up</button>
                </form>
            </div>




        </ div >

    )
}
