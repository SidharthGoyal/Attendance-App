// src/Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import axios from 'axios'; // Import axios if you're using it
import aviconnLogo from '../Static/images/Aviconn Logo.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState(null);
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    const handleClick = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`);
            setData(response.data);
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div className="login-container">
            <div className="logo-container">
                <img src={aviconnLogo} alt="Logo" className="logo" />
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <footer className="footer">
                <p>Powered by Aviconn Solutions</p>
            </footer>
        </div>
    );
};

export default Login;