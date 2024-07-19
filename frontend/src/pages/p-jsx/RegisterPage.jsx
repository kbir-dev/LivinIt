import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
            <div className="col-md-6 col-lg-3">
                <div className="card border-0 text-center">
                    <div className="card-body d-flex flex-column gap-3">
                        <h3 className="card-title text-center mb-2">Register</h3>
                        <form className='d-flex flex-column gap-4'>
                            <input type="text" className="form-control rounded-pill" id="name" placeholder="Enter Name" />
                            <input type="email" className="form-control rounded-pill" id="email" placeholder="Enter email" />
                            <input type="password" className="form-control rounded-pill" id="password" placeholder="Password" />
                            <button type="submit" className="btn root-bg-color btn-block text-white rounded-pill">Login</button>
                        </form>
                        <div>Already a member ? <Link to="/register" className='text-decor-none'>Login</Link></div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default RegisterPage
