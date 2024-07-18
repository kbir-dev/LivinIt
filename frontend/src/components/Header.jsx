import React from 'react'
import { IoEarthSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

import "./Header.css"

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary px-3 py-3">
        <div className="container-fluid">
          {/* logo */}
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <IoEarthSharp size="23px" />
            <span className="fw-bold">LivinIt</span>
          </a>

          {/* searchBar */}
          <div className="d-flex border px-3 py-2 gap-2 align-items-center rounded-pill bg-white shadow-sm justify-content-between">
            <div className="">Anywhere</div>
            <div className="border border-1 separator border-gray-400"></div>
            <div className="">Any week</div>
            <div className="border border-1 separator border-gray-400"></div>
            <div className="">Add guests</div>
            <button className="root-bg-color p-1 rounded-circle search-button d-flex align-itms-center justify-content-center"><FaSearch className="align-self-center" height={"0.8em"} color={"white"} /></button>
          </div>

          {/* User */}
          <div className="d-flex border px-3 py-1 gap-2 align-items-center rounded-pill bg-white shadow-sm ">
            <GiHamburgerMenu />
            <div>
              <FaUserCircle size={"25px"}/>
            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Header;
