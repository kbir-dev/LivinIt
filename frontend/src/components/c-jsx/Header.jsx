import React from 'react'
import { IoEarthSharp, IoSearchCircle } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import "../c-css/Header.css"

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  px-4 py-3">

                <div className="container-fluid d-flex justify-content-between">
                    <div className="div-1">
                        <Link to="/" className="navbar-brand d-flex align-items-center gap-2" href="#">
                            <IoEarthSharp size={"30px"} color='#a71547' />
                            <span className='fw-bolder d-none d-lg-inline root-color fs-4'>LivinIt</span>
                        </Link>
                    </div>


                    <div className="div-2 d-none d-lg-flex align-items-center gap-2 border rounded-pill px-3 py-1 shadow">
                        <div>Anywhere</div>
                        <div className='border border-gray separator'></div>
                        <div>Any week</div>
                        <div className='border border-gray separator'></div>
                        <div>Add guests</div>
                        <button className='btn'>
                            <IoSearchCircle size={"30px"} color='#a71547' />
                        </button>
                    </div>


                    <Link to="/login" className="div-3 border rounded-pill px-3 py-2 d-flex gap-2 align-items-center text-secondary">
                        <IoIosMenu size={"20px"} />
                        <FaUserCircle size={"30px"} />
                    </Link>
                </div>

            </nav>
        </div>
    )
}

export default Header
