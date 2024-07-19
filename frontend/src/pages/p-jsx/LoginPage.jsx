import React from 'react'
import "../p-css/LoginPage.css"
import { Link } from 'react-router-dom'

const LoginPage = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-6 col-lg-3">
                <div className="card border-0 text-center">
                    <div className="card-body d-flex flex-column gap-3">
                        <h3 className="card-title text-center mb-2">Login</h3>
                        <form className='d-flex flex-column gap-4'>
                            <input type="email" className="form-control rounded-pill" id="email" placeholder="Enter email" />
                            <input type="password" className="form-control rounded-pill" id="password" placeholder="Password" />
                            <button type="submit" className="btn root-bg-color btn-block text-white rounded-pill">Login</button>
                        </form>
                        <div>Don't have an account yet ? <Link to="/register" className='text-decor-none'>Register</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
