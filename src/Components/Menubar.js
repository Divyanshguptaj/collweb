import React from 'react';
import './all.css';
import { IoMdClose } from "react-icons/io";

function Menu(props) {
    return (
        <div className="side_menu" style={{right: props.right}}>
            <button className="close" onClick={props.closeMenu}>
                <IoMdClose size={30}/>
            </button>
            <strong className="fixed_flex logo">
                <img src="https://i.postimg.cc/02NrFwT5/canva.png" alt="Summit" loading="lazy" />
            </strong>
            <br />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Basic Parameters</a></li>
                <li><a href="/">Notifications</a></li>
                <li><a href="/">Events</a></li>
                <li><a href="/">Features</a></li>
                <li><a href="/">Mandatory Disclosure</a></li>
                <li><a href="/">About us</a></li>
                <li className="fixed_flex">
                    <a href="/" className="btn btn_1 chat_popup">SignUp/LogIn</a>
                    <a href="/" className="btn btn_2 chat_popup">Admission</a>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
