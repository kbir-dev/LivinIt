import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"

const RegisterPage = () => {
    const [userInput, setUserInput] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    )

    async function registerUser(e) {
        e.preventDefault();
        try {
            const response = await axios.post('/register', userInput);
            console.log('Registration successful:', response.data);
          } catch (error) {
            console.error('Registration failed:', error.response);
          }
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-6 col-lg-3">
                <div className="card border-0 text-center">
                    <div className="card-body d-flex flex-column gap-3">
                        <h3 className="card-title text-center mb-2">Register</h3>
                        <form className='d-flex flex-column gap-4' onSubmit={registerUser}>
                            <input type="text"
                                className="form-control rounded-pill"
                                id="name"
                                placeholder="Enter Name"
                                value={userInput.name}
                                onChange={(e) => setUserInput({ ...userInput, name: e.target.value })} />
                            <input type="email"
                                className="form-control rounded-pill"
                                id="email"
                                placeholder="Enter email"
                                value={userInput.email}
                                onChange={(e) => setUserInput({ ...userInput, email: e.target.value })} />
                            <input type="password"
                                className="form-control rounded-pill"
                                id="password"
                                placeholder="Password"
                                value={userInput.password}
                                onChange={(e) => setUserInput({ ...userInput, password: e.target.value })} />
                            <button type="submit"
                                className="btn root-bg-color btn-block text-white rounded-pill"
                                >Register
                            </button>
                        </form>
                        <div>Already a member ? <Link to="/login" className='text-decor-none'>Login</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
