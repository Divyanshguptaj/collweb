import React, { useState } from 'react';
import './all.css';
import { GiHamburgerMenu } from "react-icons/gi";
import Menu from './Menubar'; // Import the Menu component

function Navbar() {
    // const [menuOpen, setMenuOpen] = useState(true);
    const [right, setRight] = useState(-400);
    const toggleMenu = () => {
        if(right==-400) setRight(0);
        else setRight(-400);
        // setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav>
                <section className="flex_content">
                    <figure className="logo fixed_flex">
                        <img src="https://i.postimg.cc/02NrFwT5/canva.png" alt="Logo" />
                        <figcaption>
                            <strong className="title">Lilliovi</strong> Public School
                        </figcaption>
                    </figure>
                </section>
                <section className="flex_content nav_content" id="nav_content">
                    <a href="/" className="active">Home</a>
                    <a href="/">Gallery</a>
                    <a href="/">Blogs</a>
                    <a href="/" className="contact_btn">Contact us</a>
                    <a href="/">About us</a>
                </section>
                <section className="flex_content">
                    <button className="ham" onClick={toggleMenu}>
                        <GiHamburgerMenu />
                    </button>
                </section>
            </nav>
            <Menu closeMenu={toggleMenu} right={right}/>

            {/* Render the Menu component based on menuOpen state */}
        </>
    );
}

export default Navbar;
