import './Navbar.css'
import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiCampfire } from "react-icons/gi";
import Collapse from './Collapse';

const Navbar = () => {
    return (
        <div>
            <div className="wrapper-navbar">
                <div className="container">
                    <header className='header'>
                        <div className="logo">
                            <a href=""></a>

                            <GiCampfire className="logo-img" />
                        </div>

                        <div className="navigation">

                            <input type='checkbox' className='toggle-menu' />
                            <div className="hamburger"></div>

                            <ul className='menu'>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>

                                <div class="dropdown">
                                    <button class="dropbtn">Dropdown<MdOutlineKeyboardArrowDown className='rotate1' /></button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>

                                <li className="hidden-collapse"><Collapse/></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Navbar






