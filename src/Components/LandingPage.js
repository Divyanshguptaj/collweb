import React, { useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { TiArrowRightThick } from "react-icons/ti";
// import { MdOutlineArrowRight } from "react-icons/md";
import './all.css';
// import { GiHamburgerMenu } from "react-icons/gi";
// import Menu from './Menubar.js';

function LandingPage() {
    const [right, setRight] = useState(-400);
    const toggleMenu = () => {
        if(right === -400) setRight(0);
        else setRight(-400);
    };
    return (
        // HEADER
        <header className="flex">

            {/* <nav>
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
            </nav> */}
            {/* <Menu closeMenu={toggleMenu} right={right}/> */}

            <article>
                <h1 className="title big">Welcome to <br/><em>Lilliovi</em> Public School</h1>
                <p>Lilliovi: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="/" className="btn btn_3">Explore more &nbsp;<TiArrowRightThick size="10"/></a>
            </article>
            <section className="flex">
                <aside className="padding_1x">
                    <h2 className="sub_title">Admission</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <a href="/"><MdKeyboardArrowRight/></a>
                </aside>
                <aside className="padding_1x">
                    <h2 className="sub_title">Prospectus</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <a href="/"><MdKeyboardArrowRight/></a>
                </aside>
                <aside className="padding_1x">
                    <h2 className="sub_title">Features</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <a href="/"><MdKeyboardArrowRight/></a>
                </aside>
            </section>
        </header>
    );
}

export default LandingPage;
