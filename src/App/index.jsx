import './style.css';
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import Header from '../components/Header'
import Footer from '../components/Footer'


import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
    return (
        <>
            <div style={{
                background: "linear-gradient(180deg, #127CC0 0%, #FFFFFF 100%)",
            }}>
                <BrowserRouter>
                    {/* <Login /> */}
                    <Header />
                    <Routes>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<h1 style={{ height: "80vh" }}></h1>} />
                        <Route path="/products" element={<h1 style={{ height: "80vh" }}> products</h1>} />
                        <Route path="/updateproduct" element={<h1 style={{ height: "80vh" }}>update products </h1>} />
                        <Route path="/deleteproduct" element={<h1 style={{ height: "80vh" }}> delete products</h1>} />
                        <Route path="/profile" element={<h1 style={{ height: "80vh" }}> profile</h1>} />
                        <Route path="/logout" element={<h1 style={{ height: "80vh" }}>Logout </h1>} />
                    </Routes>
                    <Footer />
                </BrowserRouter >
            </div>

        </>
    );
}

export default App;
