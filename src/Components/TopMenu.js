import React from 'react';
import './all.css';
import { FaEnvelope } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";


function topMenu(){
    return(
    // TOP MENU
    <menu className="top_menu flex">
        <section className="flex_content">
            <a href="/"> <FaEnvelope /> info@lilliovi.com</a>
            <a href="/"> <MdEmail /> 1234567890</a>
        </section>
        <section className="flex_content">
            <a href="/" title="Facebook"><CiFacebook/></a>
            <a href="/" title="Instagram"><FaInstagram/></a>
            <a href="/" title="Twitter"><FaXTwitter/></a>
            <a href="/" title="youtube"><AiOutlineYoutube/></a>
        </section>
    </menu>
    );
}

export default topMenu;