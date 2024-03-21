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
                                    <button class="dropbtn">Dropdown<MdOutlineKeyboardArrowDown /></button>
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

// import './Navbar.css';
// import React, { useState, useEffect } from 'react';
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { GiCampfire } from "react-icons/gi";
// import { BrowserRouter as Router, Link } from 'react-router-dom';

// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSmallScreen, setIsSmallScreen] = useState(false);

//     useEffect(() => {
//         // Function to check if the screen size is less than 850 pixels
//         const checkScreenSize = () => {
//             setIsSmallScreen(window.innerWidth < 850);
//         };

//         // Call checkScreenSize when component mounts and when window is resized
//         checkScreenSize();
//         window.addEventListener('resize', checkScreenSize);

//         // Clean up event listener when component unmounts
//         return () => {
//             window.removeEventListener('resize', checkScreenSize);
//         };
//     }, []);

//     // Function to toggle the menu
//     const toggleMenu = () => {
//         if (isSmallScreen) {
//             setIsMenuOpen(!isMenuOpen);
//         }
//     };

//     return (
//         <div>
//             <div className="wrapper-navbar">
//                 <div className="container">
//                     <header className='header'>
//                         <div className="logo">
//                             <a href="">
//                                 <GiCampfire className="logo-img" />
//                             </a>
//                         </div>

//                         <div className="navigation">
//                             <input type='checkbox' className='toggle-menu' />
//                             <div className="hamburger"></div>

//                             <ul className='menu'>
//                                 <li><a href="">Home</a></li>
//                                 <li><a href="">About</a></li>

//                                 <div className={`dropdown ${isSmallScreen ? 'open' : ''}`} onClick={toggleMenu}>
//                                     {/* Toggle the menu when button is clicked (only if screen size is less than 850) */}
//                                     <button className="dropbtn">Dropdown <MdOutlineKeyboardArrowDown /></button>
//                                     {/* Render the dropdown content based on isMenuOpen state and screen size */}
//                                     {isMenuOpen && isSmallScreen && (
//                                         <div className="dropdown-content">
//                                             <a href="#">Link 1</a>
//                                             <a href="#">Link 2</a>
//                                             <a href="#">Link 3</a>
//                                         </div>
//                                     )}
//                                 </div>

//                                 <li><a href="">Contact Us</a></li>
//                             </ul>
//                         </div>
//                     </header>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbar;




