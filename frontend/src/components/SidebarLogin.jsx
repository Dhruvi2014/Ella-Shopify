import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './SidebarLogin.css';

const SidebarLogin = ({ isOpen, onClose }) => {
    const { login } = useContext(AuthContext);
    const [isLoginView, setIsLoginView] = useState(true);
    const [message, setMessage] = useState('');

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const [firstName, setFirstName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email: loginEmail,
                password: loginPassword
            });
            login(res.data);
            setMessage('');
            onClose();
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login failed');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', {
                firstName,
                email: regEmail,
                password: regPassword
            });
            login(res.data);
            setMessage('');
            onClose();
        } catch (error) {
            setMessage(error.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className={`sidebar-login-wrapper ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-backdrop" onClick={onClose}></div>
            <div className="sidebar-login">
                <div className="sidebar-header">
                    <h2>{isLoginView ? 'Login' : 'CREATE ACCOUNT'}</h2>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
                
                <div className="sidebar-content">
                    {message && <div className="alert alert-danger p-2">{message}</div>}

                    {isLoginView ? (
                        <div className="login-form-container">
                            <form onSubmit={handleLogin}>
                                <div className="form-group mb-3">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Email" 
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-outline-dark w-100 mb-3 border-dark rounded-0 py-2">
                                    LOGIN
                                </button>
                                <div className="text-center mb-4">
                                    <a href="#" className="forgot-password text-dark text-decoration-none">
                                        Forgot your password?
                                    </a>
                                </div>
                                <button 
                                    type="button" 
                                    className="btn btn-dark w-100 rounded-0 py-2"
                                    onClick={() => setIsLoginView(false)}
                                >
                                    CREATE ACCOUNT
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div className="register-form-container">
                            <form onSubmit={handleRegister}>
                                <div className="form-group mb-3">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="First name" 
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        placeholder="Email" 
                                        value={regEmail}
                                        onChange={(e) => setRegEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Password" 
                                        value={regPassword}
                                        onChange={(e) => setRegPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-outline-dark mb-4 border-dark rounded-0 py-2 create-account-btn">
                                    CREATE AN ACCOUNT
                                </button>

                                <div className="text-center mt-3">
                                    <a href="#" className="text-dark" onClick={(e) => { e.preventDefault(); setIsLoginView(true); }}>
                                        Back to Login
                                    </a>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SidebarLogin;
