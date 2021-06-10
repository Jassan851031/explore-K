import React from 'react'
import logo from './logo.jpg'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light" id='logo'>
                    <a className="brand" href="#">
                        <img src={logo} id='logo' className="img" alt="..."/>
                    </a>
                
            </nav>
        </>
    )
}

export default Navbar;